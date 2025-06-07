import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // fundo branco para a tela
  },
  text: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222', // cor escura para o texto
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  header: {
    backgroundColor: '#007AFF', // azul do iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // para sombra no Android
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  tabBar: {
    backgroundColor: '#f9f9f9',
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  tabIcon: {
    marginBottom: -3,
  },
});
