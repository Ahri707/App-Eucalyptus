import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1f1f26',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  decorTop: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(0,229,255,0.08)',
  },
  decorBottom: {
    position: 'absolute',
    bottom: -50,
    left: -50,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(179,255,51,0.06)',
  },
  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#25262d',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#b3ff33',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  title: {
    color: '#B4FF3F',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 2,
  },
  subtitle: {
    color: '#dffeff',
    fontSize: 12,
  },
  infoText: {
    color: '#bfeffd',
    fontSize: 12,
    marginBottom: 12,
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#9fbcc3',
    fontSize: 12,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#2f3137',
    borderRadius: 12,
    padding: 12,
    color: '#fff',
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2f3137',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    width: '100%'
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 12,
  },
  eye: {
    fontSize: 20,
    color: '#B4FF3F',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#00e5ff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(179,255,51,0.18)'
  },
  buttonText: {
    color: '#0a0a0a',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    color: '#dfeff0',
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#B4FF3F',
    fontWeight: '700',
    marginLeft: 6,
  },
  errorText: {
    color: '#ff7b7b',
    width: '100%',
    marginTop: 6,
    marginBottom: 8,
  },
  validText: {
    color: '#B4FF3F',
    width: '100%',
    marginTop: -8,
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: '#444',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    opacity: 0.85,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ruleText: {
    marginLeft: 8,
  },
  ruleTextOk: {
    color: '#B4FF3F',
    marginLeft: 8,
    marginTop: 2,
  },
  ruleTextError: {
    color: '#ff4d4d',
    marginLeft: 8,
    marginTop: 2,
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
});

export default styles;
