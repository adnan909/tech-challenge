import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import getApolloClient from './src/apollo';
import AppNavigator from './src/navigation/index';
import Spinner from './src/components/spinner/spinner';

export default function App() {
  const [client, setClient] = useState(null)
  useEffect(() => {
    setClient(getApolloClient())
  }, [])
  if (!client) return <Spinner />
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}

