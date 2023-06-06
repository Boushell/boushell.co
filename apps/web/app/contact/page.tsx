'use client';
import { useState } from 'react';

import { Button, Flex, Text, Textarea, TextInput } from '@mantine/core';

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [from, setFrom] = useState('');
  const [sent, setSent] = useState(false);

  async function sendMessage() {
    const url = 'http://localhost:3000/api/send-email';
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, from }),
    };

    try {
      const response = await fetch(url, options);
      setMessage('');
      setFrom('');
      setSent(true);
      return response;
    } catch (error) {
      throw new Error('Failed to send message.');
    }
  }

  return (
    <>
      <Flex justify="center" direction="column" align="center">
        <Text mb="xl" size={40} weight="bold">
          Say Hi!
        </Text>
        <Flex direction="column" justify="flex-start" w="100%">
          <Text size="xl" color="gray">
            What's your email?
          </Text>
          <TextInput
            w="100%"
            color="cyan"
            size="xl"
            mb="lg"
            value={from}
            disabled={sent}
            onChange={(e) => setFrom(e.target.value)}
          />
          <Text size="xl" color="gray">
            What's on your mind?
          </Text>
          <Textarea
            w="100%"
            color="cyan"
            size="xl"
            mb="lg"
            value={message}
            disabled={sent}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            color="cyan"
            size="xl"
            fullWidth
            disabled
            onClick={async () => await sendMessage()}
          >
            {/* {sent ? 'Message Sent!' : 'Send'} */}
            Out of Order
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
