**README.md - Calculadora de Bhaskara com Estilo CSS**

# Calculadora de Bhaskara em JavaScript

Esta é uma calculadora simples de Bhaskara implementada em JavaScript, que resolve equações quadráticas do tipo ax² + bx + c = 0. A função `Bhaskara()` é projetada para ser incorporada em páginas da web e fornece as raízes da equação.

## Como Usar

1. **Acesse a Calculadora Online:**

   O projeto está hospedado em [https://bhaskara-calculate.netlify.app](https://bhaskara-calculate.netlify.app). Você pode acessar a calculadora online e experimentar a funcionalidade.

2. **Inclua a biblioteca SweetAlert2:**

 Incluso a biblioteca SweetAlert2 no seu projeto, mais detalhes sobre ela em : [https://sweetalert2.github.io/](https://sweetalert2.github.io/).

3. **Adicione o código da calculadora ao seu projeto.**

4. **HTML:**

   Adicionado os campos de entrada HTML para os coeficientes (a, b e c) e um botão para acionar a função Bhaskara.

   ```html
   <label for="a">a:</label>
   <input type="text" id="a">

   <label for="b">b:</label>
   <input type="text" id="b">

   <label for="c">c:</label>
   <input type="text" id="c">

   <button onclick="Bhaskara()">Calcular Raízes</button>
   ```

## Estilo CSS

- **Fundo Branco:** `background-color: white;`
- **Botão:** `color: #ff6666;`
- **Títulos:** `color: #ff6666;`
- **Link:** `color: rgb(26, 23, 23);`

- **Margens e Alinhamento:** `display: flex; align-items: center; justify-content: center;`
- **Inputs e Botões:** `width: 40%; margin-top: 9px;`
- **Responsividade:** `@media (max-width: 523px)`

- **Fonte Principal:** `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`

### Disposição dos Elementos:

Essas escolhas de estilo foram feitas considerando tanto a estética quanto a usabilidade, proporcionando uma interface clara e atraente para os usuários. A responsividade também foi considerada para garantir uma experiência consistente em uma variedade de dispositivos.
