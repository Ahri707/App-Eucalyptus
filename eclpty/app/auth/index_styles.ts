import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f26",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  decorTop: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(0,229,255,0.08)",
  },
  decorBottom: {
    position: "absolute",
    bottom: -50,
    left: -50,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(179,255,51,0.06)",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#25262d",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#b3ff33",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#00e5ff",
  },
  subtitle: {
    fontSize: 14,
    color: "#dffeff",
    marginTop: 2,
  },
  infoText: {
    color: "#bfeffd",
    fontSize: 12,
    marginBottom: 12,
  },
  inputGroup: {
    marginBottom: 12,
    width: "100%",
  },
  label: {
    color: "#9fbcc3",
    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    backgroundColor: "#2f3137",
    borderRadius: 12,
    padding: 12,
    color: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2f3137",
    borderRadius: 12,
    paddingHorizontal: 12,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    color: "#fff",
    marginLeft: 8,
  },
  forgotText: {
    color: "#9aa",
  },
  button: {
    backgroundColor: "#00e5ff",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(179,255,51,0.18)",
  },
  buttonText: {
    color: "#0a0a0a",
    fontWeight: "700",
    fontSize: 16,
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#dfeff0",
  },
  createText: {
    color: "#b3ff33",
    fontWeight: "700",
    marginLeft: 6,
  },
  errorText: {
    color: "#ff7b7b",
    width: "100%",
    marginTop: 6,
  },
});

export default styles;
