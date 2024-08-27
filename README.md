# Análise e Levantamentos de Requisitos

## Apresentação 
    Nome do Projeto: DripStyle
    Versão: 1.00
    Criadores: Nathan Almeida
    E-mail Contato: nathan.dev2004@gmail.com
    Telefone: (11) 94313-3947

# DripStyle
Uma aplicação de e-commerce para venda de roupas, oferecendo uma experiência de compra simples e intuitiva.

## Sumário

- [Visão Geral](#visão-geral)
- [Levantamento de Requisitos](#levantamento-de-requisitos)
  - [Requisitos Funcionais](#requisitos-funcionais)
  - [Requisitos Não Funcionais](#requisitos-não-funcionais)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

## Visão Geral

A **DripStyle** é uma solução completa de e-commerce, que oferece funcionalidades robustas para clientes e administradores. A aplicação cobre desde a navegação e busca de produtos até a gestão de pedidos e processamento de pagamentos.

## Levantamento de Requisitos
### Requisitos Funcionais

1. **Cadastro e Autenticação de Usuários**
   - Permitir o cadastro de novos usuários com nome, e-mail, senha, e endereço.
   - Implementar autenticação segura (login e logout) para usuários registrados.
   - Suporte à recuperação de senha via e-mail.

2. **Gestão de Produtos**
   - Administradores podem adicionar, editar e remover produtos.
   - Produtos devem ser categorizados (ex: camisetas, calças, acessórios).
   - Cada produto deve ter uma página de detalhes com imagens, descrições, preços, e opções de tamanho e cor.

3. **Navegação e Busca**
   - Oferecer uma barra de busca com filtros por categoria, preço, e avaliação.
   - Implementar navegação por categorias e subcategorias de produtos.

4. **Carrinho de Compras**
   - Usuários devem poder adicionar produtos ao carrinho, alterar quantidades, e remover itens.
   - Exibição do resumo do pedido com total dos itens, frete, e impostos aplicáveis.
   - Suporte à aplicação de cupons de desconto.

5. **Finalização de Compra (Checkout)**
   - Processo de checkout seguro com coleta de informações de pagamento e entrega.
   - Integração com gateway de pagamento para processamento de transações.
   - Envio de e-mail de confirmação após a finalização da compra.

6. **Gestão de Pedidos**
   - Clientes podem visualizar o histórico de pedidos e o status atual (ex: em processamento, enviado, entregue).
   - Administradores devem poder visualizar, atualizar o status, e gerenciar todos os pedidos.

7. **Sistema de Avaliações e Comentários**
   - Clientes podem avaliar produtos com uma nota de 1 a 5 estrelas.
   - Comentários podem ser adicionados aos produtos e moderados por administradores.

8. **Gestão de Estoque**
   - Controle automático de estoque baseado nas vendas realizadas.
   - Notificação para administradores quando um produto estiver com estoque baixo.

9. **Integração com Redes Sociais**
   - Opção para usuários compartilharem produtos em redes sociais.

10. **Gestão de Usuários e Perfis**
    - Painel de administração para gerenciar usuários e permissões.
    - Perfis de usuários com histórico de compras e informações de contato.

### Requisitos Não Funcionais

1. **Desempenho**
   - O sistema deve ser capaz de atender até 10.000 usuários simultâneos sem degradação significativa no desempenho.
   - As páginas devem carregar em menos de 2 segundos em condições normais de rede.

2. **Segurança**
   - Todas as transações devem ser realizadas através de conexões HTTPS.
   - Senhas devem ser criptografadas e armazenadas de forma segura.
   - Implementação de medidas contra ataques de injeção de SQL, cross-site scripting (XSS), e cross-site request forgery (CSRF).

3. **Escalabilidade**
   - A arquitetura do sistema deve suportar expansão horizontal para lidar com aumento de tráfego.
   - Suporte para adicionar novas funcionalidades e módulos sem impactar a operação existente.

4. **Disponibilidade**
   - O sistema deve garantir uma disponibilidade de 99,9% ao longo do ano.
   - Backups automáticos diários e capacidade de recuperação em caso de falha.

5. **Usabilidade**
   - Interface intuitiva e fácil de usar, com ênfase na experiência do usuário.
   - Design responsivo que se adapta a diferentes dispositivos e tamanhos de tela.

6. **Compatibilidade**
   - Suporte aos navegadores mais populares (Chrome, Firefox, Safari, Edge).
   - Compatibilidade com dispositivos móveis e tablets.

7. **Manutenibilidade**
   - Código modular e bem documentado para facilitar futuras manutenções e atualizações.
   - Testes automatizados para garantir a integridade do sistema após mudanças no código.

8. **Auditoria e Log**
   - Registro de atividades críticas (ex: login, compras, alterações de dados) para auditoria.
   - Logs acessíveis apenas para administradores com permissão adequada.

## Arquitetura do Sistema

- **Frontend:** Desenvolvido com html para uma interface dinâmica e responsiva.
- **Backend:** Node.js para um servidor rápido e escalável.
- **Banco de Dados:** MySQL para armazenamento flexível de dados.
- **Autenticação:** JWT (JSON Web Token) para gerenciamento de sessões.
- **Pagamento:** Integração com Stripe API para processamento de pagamentos seguros.
- **DevOps:** Docker para containerização e AWS (Amazon Web Services) para hospedagem e escalabilidade.

## Instalação e Configuração
### Pré-requisitos

- Java Script, Node.js v14+ e npm.
- Railway.


## Licença 
Esse template cobre todos os aspectos importantes para documentar o funcionamento de uma loja online, desde a apresentação do projeto até a instalação, estrutura, e levantamento de requisitos funcionais e não funcionais. Você pode adaptar esse template conforme necessário para o seu projeto específico.

