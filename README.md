# meu-portifolio
Portifólio contendo informações profissionais e de imóveis anunciados

## Comandos para executar o projeto localmente

1. Executar o projeto local
`npm run dev`

2. Compilar o projeto sem rodar
`npm run build`

3. Fazer o deploy, ou seja, subir meu site pro github pages, dessa forma consigo acessar pelo https://corretoramsouza.github.io/meu-portifolio 
`npm run deploy`

## Comandos para meu site

- Ver o que falta subir no github: `git status`

obs: os arquivos em vermelho é o que falta dar `git add .` 
e os arquivos em verde é o que ta faltando dar `git commit -m "Minha mensagem"`

- Salvar as alterações local, `git commit -m "Minha mensagem"`
- Subir para o github: `git push origin main`
- ver se minhas alterações foram salvas no github: `git log --oneline`

obs. se meu commit só tiver a palavra pintada de verde significa que só ta salvo localmente
Se estiver as letras verdes e vermelho, esta apto para usar.

# To do
1. Adiciionaar mais informções nos tópicos relacionados a destaques no máximo 6 itens

2. Adicionar mais itens nos slides (Carrocel), adicionar no máximo mais 4 pra ficar com 8

3. Criar uma seção relacionada a produtos, em que terá um carrocel para cada construtora usando os cards de produtos que estão na sessão de destaque.


## Basico de React

1. Todo componente é uma função. Mas nem toda função é um componente.
Obs. Componentes sempre começam com letra maiúscula, enquanto que funções comnus começam com letra minuscula.

2. O que é uma função?
Uma função é uma instrução que recebe parametros e retornam algum valor.
Obs. Nem toda função, recebe parametro e nem toda função tem retorno (retur). Quando uma função não tem retorno, ela pode ser chamada de instrução ou rotina.

```ts
//Exemplo de função que realiza uma soma
function soma(x,y){
    return  x + y
}

//Exemplo de instrução/rotina/procedimento
function andar(){
    // Dar um passo com o pé direito
    // Dar um passo com o pé esquerdo
} 

//Exemplo de uso da função
var resultado = soma(10,5)
//O valor de resultado será 15
```
