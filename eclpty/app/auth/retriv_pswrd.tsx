import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./retriv_pswrd_styles";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Informe um endereço de E-mail válido");
      return;
    }

    setEmailError("");
    console.log("E-mail enviado:", email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.decorTop} />
      <View style={styles.decorBottom} />

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="nutrition" size={28} color="#0b0b0b" />
          </View>
          <View>
            <Text style={styles.title}>Esqueceu sua senha?</Text>
            <Text style={styles.infoText}>Digite seu e-mail e iremos enviar um link para você redefinir sua senha.</Text>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Informe seu E-mail de acesso</Text>
          <TextInput
            placeholder="seu@email.com"
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (text.length === 0) {
                setEmailError("");
              } else if (!validateEmail(text)) {
                setEmailError("Informe um endereço de E-mail válido");
              } else {
                setEmailError("");
              }
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {emailError.length > 0 && (
            <Text style={styles.errorText}>{emailError}</Text>
          )}

          <TouchableOpacity
            style={emailError ? [styles.button, { opacity: 0.6 }] : styles.button}
            onPress={handleSubmit}
            disabled={!validateEmail(email)}
          >
            <Text style={styles.buttonText}>Enviar link</Text>
          </TouchableOpacity>

          <View style={styles.centerRow}>
            <Text style={styles.footerText}>Ainda não tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => router.push('/auth/register')}
              accessibilityRole="button"
              activeOpacity={0.7}
            >
              <Text style={styles.create}> Crie uma</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

