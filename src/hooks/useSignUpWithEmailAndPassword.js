import { doc, setDoc } from "firebase/firestore"
import { auth, firestore } from "../firebase/firebase"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import useShowToast from "./useShowToast"
import useAuthStore from "../store/authStore"

const useSignUpWithEmailAndPassword = () => {
	const [createUserWithEmailAndPassword, loading, error] =
		useCreateUserWithEmailAndPassword(auth)

	const showToast = useShowToast()

	const loginUser = useAuthStore((state) => state.login)
	const logoutUser = useAuthStore((state) => state.logout)

	const signup = async (inputs) => {
		if (
			!inputs.email ||
			!inputs.password ||
			!inputs.userName ||
			!inputs.fullName
		) {
			showToast("Error", "Please fill all the fields", "error")
			return
		}

		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			)
			if (!newUser) {
				console.log(error)
				showToast("Error", error.message, "error")
				return
			}
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					userName: inputs.userName,
					fullName: inputs.fullName,
					bio: "",
					profilePicUrl: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				}
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
				localStorage.setItem("user-info", JSON.stringify(userDoc))
				loginUser(userDoc)
			}
		} catch (err) {
			showToast("Error", err.message, "error")
		}
	}

	return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword