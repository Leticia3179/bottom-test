import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  
  // Estilo para o container principal das telas
  container: {
    flex: 1,                    
    justifyContent: 'center',  
    alignItems: 'center',       
    paddingHorizontal: 20,      
    backgroundColor: '#fff',   
  },

  // Estilo para textos principais nas telas
  text: {
    fontSize: 26,              
    fontWeight: '700',          
    color: '#222',             
    textAlign: 'center',      
    letterSpacing: 0.5,   
  },

  // Estilo para o cabeçalho (header) das telas (se usado)
  header: {
    backgroundColor: '#007AFF',
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.25,        
    shadowRadius: 3.84,        
    elevation: 5,              
  },

  // Estilo para título do cabeçalho (header)
  headerTitle: {
    color: '#fff',              
    fontSize: 20,              
    fontWeight: '600',          
  },

  // Estilo para a barra de abas (tabBar)
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

  // Estilo para ícones nas abas (não está usado no seu código atual)
  tabIcon: {
    marginBottom: -3,          
  },
});
