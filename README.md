
## Dependências Transitivas


_Este problema foi utilizado em 122 Dojo(s)._

Vamos escrever algum código para calcular como as dependências se propagam entre coisas como classes em um programa.

Código altamente acoplado é o código onde as dependências entre suas partes são densas, muitas coisas dependem de muitas outras. Este tipo de código é difícil de entender e manter, e tende a ser frágil, falhando facilmente quando fazemos alguma mudança.

Existem muitos tipos diferentes de acoplamento. O mais simples de trabalhar programaticamente é o 'acoplamento estático'. De forma simples podemos dizer que a classe A é estaticamente acoplada a classe B se o compilador precisa da definição de B para compilar A.

As dependências podem ser transitivas - se A depende de B e B depende de C, então A depende de B e C. Então vamos escrever um código que calcula o conjunto completo de dependências para um grupo de classes. O código recebe como entrada um conjunto de linhas, onde em cada linha, o primeiro token é o nome da classe. Os token seguintes são os nomes das classes que a primeira classe depende.

Dada a seguinte entrada, sabemos que A depende diretamente de B e C, e C depende de G, portanto A também depende de G:

```
  A   B   C
  B   C   E
  C   G
  D   A   F
  E   F
  F   H
```

O conjunto de dependências completo para cada classe, para o conjunto anterior seria:

```
  A   B C E F G H
  B   C E F G H
  C   G
  D   A B C E F G H
  E   F H
  F   H

```

----

## Retrospectiva

### O que foi bom
- Interação
- Aprendizado sobre testes
- Network
- Melhorar o codigo para o Intelisense
- Interação da equipe com a resolução dos problemas
- Experiência com o Dojo
- Aprender a usar o Jest
- Exercitar a lógica de programação
- Escrever o teste antes de resolve TDD

### O que pode melhorar
- Ambiente previamente configurado
- Integrar o Prettier
- Trocar o OS da maquina