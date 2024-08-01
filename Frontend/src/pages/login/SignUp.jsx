import { Box, Button, Checkbox, Heading, Input, Text, useToast } from '@chakra-ui/react';
import Navbar from '/src/components/Navbar/Navbar.jsx';
import BlackOneSlider from '/src/components/slider/BlackOneSlider';
import Footer from '/src/components/Footer/Footer';
import axios from 'axios';
import { useState } from 'react';
 

const SignUp = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const toast = useToast(); // Toast for displaying notifications
 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Password mismatch',
        description: 'Passwords do not match. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Send POST request to backend
    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      // Handle success response
      if (response.status === 201) {
        toast({
          title: 'Account created',
          description: `Congratulations ${formData.username}, you are registered!`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        const isAuthUser = { isAuth: true, data: formData.username };
        localStorage.setItem('user', JSON.stringify(isAuthUser));
        setFormData({
          // Reset form data
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        
      }
    } catch (error) {
      console.error('Error creating account:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'An error occurred while creating your account.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Navbar />
      <BlackOneSlider />
      <Heading pt={5} textAlign={'center'}>
        𝙲𝚛𝚎𝚊𝚝𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝
      </Heading>

      <Box w={'30vw'} m={'auto'} display={['none', 'none', 'none', 'block']}>
        <form onSubmit={handleSubmit}>
          <label>
            <Text fontSize={'lg'}>ᴜsᴇʀɴᴀᴍᴇ</Text>
          </label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            required
            placeholder="Name Please"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <label>
            <Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text>
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            required
            placeholder="Email Likhna Jaruri h Bhai"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <label>
            <Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text>
          </label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            required
            placeholder="Password To Ekdam Jaruri h Bhai"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <label>
            <Text fontSize={'lg'}>ᴄᴏɴғɪʀᴍ ᴘᴀssᴡᴏʀᴅ</Text>
          </label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            required
            placeholder="Confirm your password"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <Checkbox p={5} defaultChecked>
            Subscribe to stay updated with new offers!
          </Checkbox>

          <Button
            type="submit"
            borderRadius={'none'}
            fontSize={'lg'}
            mt={5}
            w={'100%'}
            p={5}
            bg={'black'}
            color={'white'}
            _hover={{ bg: 'gray' }}
          >
            ᴄʀᴇᴀᴛᴇ
          </Button>
        </form>
      </Box>

      {/* -------------------------------- */}

      <Box w={'70vw'} pb={5} m={'auto'} mt={5} display={['block', 'Block', 'block', 'none']}>
        <form onSubmit={handleSubmit}>
          <label>
            <Text fontSize={'lg'}>ᴜsᴇʀɴᴀᴍᴇ</Text>
          </label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Name Please"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <label>
            <Text fontSize={'lg'}>ᴇᴍᴀɪʟ</Text>
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Likhna Jaruri h Bhai"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <label>
            <Text fontSize={'lg'}>ᴘᴀssᴡᴏʀᴅ</Text>
          </label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password To Ekdam Jaruri h Bhai"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <label>
            <Text fontSize={'lg'}>ᴄᴏɴғɪʀᴍ ᴘᴀssᴡᴏʀᴅ</Text>
          </label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm your password"
            mt={2}
            borderRadius={'none'}
            p={5}
            onChange={handleChange}
          />

          <Checkbox p={5} defaultChecked>
            Subscribe to stay updated with new offers!
          </Checkbox>

          <Button
            type="submit"
            borderRadius={'none'}
            fontSize={'lg'}
            mt={5}
            w={'100%'}
            p={5}
            bg={'black'}
            color={'white'}
            _hover={{ bg: 'gray' }}
          >
            ᴄʀᴇᴀᴛᴇ
          </Button>
        </form>
      </Box>

      <Footer />
    </Box>
  );
};

export default SignUp;
