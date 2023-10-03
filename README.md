# Cineflex Project

## Sobre

Cineflex é um aplicativo web que permite aos usuários reservar lugares para assistir a um filme no cinema. As principais características do projeto incluem:

- Escolha um filme em uma lista de filmes populares;
- Escolha uma sessão para assistir ao filme;
- Selecione os lugares disponíveis para a sessão escolhida;
- Reserve os assentos selecionados;
- Veja a confirmação da reserva.

Cineflex foi desenvolvido como um projeto pessoal para praticar minhas habilidades de desenvolvimento web. Fiquei motivado para criar este aplicativo porque é uma ferramenta que pode ser útil para muitas pessoas e pode ser usada em diferentes contextos.

Escolhi usar React.js porque é uma das bibliotecas de desenvolvimento web mais populares da atualidade e fornece uma estrutura escalonável e de fácil manutenção para a construção de aplicativos web modernos. React Router foi usado para gerenciar rotas de aplicativos. Axios foi usado para fazer chamadas de API para buscar informações sobre filmes, sessões e assentos disponíveis. Styled-Components foi usado para criar a interface do usuário e fornecer uma experiência agradável e intuitiva para os usuários.

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571807-3c82dbd4-7f3b-400f-af9a-212c4cc7a394.png" >
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571818-b17ef207-9a94-4356-97ab-c08e42f22ee6.png">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224572892-58ad581a-2d26-49aa-9eeb-002546c2669a.png">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571825-b30898e6-f661-4539-96b3-f5943502d1b8.png" >
</div>

🔸 Deploy: https://projeto10-cineflex-bay.vercel.app/

<hr/>

## 🛠️ Tecnologias

<div> 
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" /> 
<div>
<br>
  
<hr/>

## ⚙️ Funcionalidade

### Escolha do filme (/)
Na tela inicial, você pode ver uma lista de filmes populares. O usuário pode selecionar um filme para ver mais informações e escolher uma sessão para assistir ao filme.

### Escolha a Sessão (/sessoes/:idMovie)
Nesta tela, o usuário pode escolher uma sessão para assistir ao filme escolhido. Informações da sessão, como horário e número de vagas disponíveis, são fornecidas pela API.

### Seleção de assento (/seats/:idSessao)
Nesta tela o usuário poderá selecionar as vagas para a sessão escolhida. Os assentos disponíveis estão marcados em verde e os assentos selecionados pelo usuário estão marcados em azul. O usuário pode selecionar ou desmarcar assentos clicando neles.

<hr/>
  
## 🚀 Próximas etapas
- Implementar um sistema de login para os usuários salvarem suas informações e histórico
- Adicione um recurso para os usuários avaliarem e comentarem filmes
- Implementar um painel de administração para gerenciar filmes e sessões

<hr/>

## 🖇 Como executar
Para executar este projeto localmente, você precisará seguir estas etapas:

1. Clone este repositório: git clone https://github.com/FellipeLimaT/projeto9-cineflex.git
2. Instale as dependências: npm install
3. Execute o servidor de desenvolvimento: npm start
4. Acesse http://localhost:3000 no seu navegador para ver o aplicativo em execução.



