class Usuario {
    #senha; // atributo privado
  
    // Getter para acessar a senha
    get senha() {
      return this.#senha;
    }
  
        set senha(novaSenha) {
      if (novaSenha.length > 6) {
        this.#senha = novaSenha;
      } else {
        console.log('A senha deve ter mais de 6 caracteres.');
      }
    }
  }
  
  const usuario1 = new Usuario();
  usuario1.senha = '1234567'; // senha válida
  console.log(usuario1.senha); // exibe: 1234567
  
  usuario1.senha = '123'; // tenta definir uma senha curta
  // exibe: A senha deve ter mais de 6 caracteres.
  console.log(usuario1.senha); // ainda exibe: 1234567