import  { useEffect } from 'react';
import axios from 'axios';
import ace from 'ace-builds';

const APITest = () => {
  const clientId = 'YourClientID'; // Replace with your client ID
  const clientSecret = 'YourClientSecret'; // Replace with your client Secret
  const script = '';
  const language = 'php';
  const versionIndex = '0';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set the basePath for Ace editor
        ace.config.set('basePath', 'https://cdn.jsdelivr.net/ace/1.4.12/');

        // Load the necessary modes and themes for Ace editor
        await Promise.all([
          import('ace-builds/src-noconflict/mode-php'),
          import('ace-builds/src-noconflict/theme-terminal'),
        ]);

        // Make the API call to JDoodle
        const response = await axios.post(
          'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute',
          {
            clientId,
            clientSecret,
            script,
            language,
            versionIndex,
          }
        );

        console.log('Output from JDoodle: ', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <div>API Test</div>;
};

export default APITest;


