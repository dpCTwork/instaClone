import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "./ProfilePost"

const ProfilePosts = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2000)
	}, [])

	return (
		// Grid component here and GridItem component in child component (ProfilePost.jsx)
		// Grid component is a flex container and GridItem component is a flex item.
		// Grid component is used to create a grid layout. It takes a templateColumns prop to define the number of columns in the grid.
		<Grid
			templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
			gap={1}
			columnGap={1}>
			{isLoading &&
				[0, 1, 2, 3, 4, 5].map((item, index) => (
					<VStack key={index} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h="300px">contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isLoading && (
				<>
					<ProfilePost img="/img1.png" />
					<ProfilePost img="/img2.png" />
					<ProfilePost img="/img3.png" />
					<ProfilePost img="/img4.png" />
				</>
			)}
		</Grid>
	)
}

export default ProfilePosts
