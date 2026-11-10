# Central do Implantador SW — Subway

Versão reorganizada conforme a sequência definida para a implantação SW.

## Sequência atual
1. Configuração da Loja · Backoffice — cartilha PDF incorporada na própria página.
2. Configuração do Servidor.
3. Configuração do KDS.
4. Configuração do Painel de Senha.
5. Instalação do Aplicativo do Totem.
6. Teste integrado.
7. Entrega técnica.

As configurações que antes apareciam separadas em várias etapas do Backoffice foram reunidas em uma única etapa, pois fazem parte da preparação centralizada da loja no Backoffice. As etapas seguintes tratam da configuração/instalação individual dos componentes.

As etapas 2 a 7 já aparecem no menu e abrem uma área reservada para receber seus procedimentos. Não foram inventadas instruções para essas etapas.

## Arquivos
- `index.html`: portal e menu de etapas.
- `styles.css`: layout e identidade visual.
- `app.js`: navegação interna entre etapas.
- `logo-sw.png`: logo SW fornecido.
- `cartilha-backoffice.pdf`: cartilha original fornecida.

## Publicar gratuitamente no GitHub Pages
1. Crie um repositório **Public** no GitHub.
2. Descompacte este pacote.
3. Envie todos os arquivos para a raiz do repositório.
4. Faça **Commit changes**.
5. Abra **Settings → Pages**.
6. Em **Build and deployment**, selecione **Deploy from a branch**.
7. Escolha `main` e `/(root)` e clique em **Save**.
8. Aguarde o endereço público do GitHub Pages.

A cartilha abre dentro da página por meio do visualizador PDF do navegador. O portal é estático e não possui login ou banco de dados.
