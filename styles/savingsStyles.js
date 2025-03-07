import { StyleSheet } from 'react-native';

const savingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 20,
  },
  savingsText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#1565C0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default savingsStyles;
