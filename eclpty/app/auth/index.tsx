import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./index_styles";

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [submitAttempted, setSubmitAttempted] = useState<boolean>(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
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
            <Text style={styles.title}>Olá!</Text>
            <Text style={styles.subtitle}>Bem-vindo ao Eucalyptus</Text>
          </View>
        </View>

        <Text style={styles.infoText}>App de nutrição para crianças e adolescentes</Text>

        {/* Campo Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#9aa"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (submitAttempted) {
                if (validateEmail(text)) setEmailError("");
              }
            }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {submitAttempted && emailError.length > 0 && (
            <Text style={styles.errorText}>{emailError}</Text>
          )}
        </View>

        {/* Campo Senha */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              placeholderTextColor="#9aa"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"} 
                size={22} 
                color="#9aa" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={remember}
              onValueChange={setRemember}
              color={remember ? "#b3ff33" : "#aaa"}
            />
            <Text style={styles.checkboxText}>Lembre-se</Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/auth/retriv_pswrd')}
            accessibilityRole="button"
            activeOpacity={0.7}
          >
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={() => {
            setSubmitAttempted(true);
            if (!validateEmail(email)) {
              setEmailError("Informe um endereço de E-mail válido");
              return;
            }
            if (!password || password.trim().length === 0) {
              Alert.alert("Senha inválida", "Informe sua senha");
              return;
            }
            setEmailError("");
            router.push('/home/dashboard');
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.centerRow}>
          <Text style={styles.footerText}>Ainda não tem conta? </Text>
          <TouchableOpacity
            onPress={() => router.push('/auth/register')}
            accessibilityRole="button"
            activeOpacity={0.7}
          >
            <Text style={styles.createText}>Crie uma</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default function Index() {

  return <LoginScreen />;
}
