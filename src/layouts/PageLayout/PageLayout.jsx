import { Box, Flex } from "@chakra-ui/react"

import { useLocation } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"

// instead of adding the Sidebar component to each page, we can add it to the PageLayout component and wrap the children with it
// this way, the Sidebar will be displayed on all pages except the Auth page.

// eslint-disable-next-line react/prop-types
const PageLayout = ({ children }) => {
	const { pathname } = useLocation()

	return (
		<Flex>
			{/* sidebar on the left */}
			{pathname !== "/auth" ? (
				<Box w={{ base: "70px", md: "240px" }}>
					<Sidebar />
				</Box>
			) : null}
			{/* page content on the right */}
			<Box
				flex={1}
				w={{ base: "calc(100% - 70px", md: "calc(100% - 240px" }}>
				{children}
			</Box>
		</Flex>
	)
}

export default PageLayout
