import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useColorMode, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleSubmit = () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPost = { title, content };
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Flex justifyContent="space-between" width="100%">
          <Heading as="h1" size="xl">Create a New Post</Heading>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Flex>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;