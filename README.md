<h1>Desafio de Orientação a Objetos em javascript</h1>



<h2>Classe Abstrata Veiculo:</h2>
<div>
  Atributos:
  <ul>
    <li>
      Nome (String)<br>
      <i>Nome/modelo do veículo. Ex: Gol, BMW, Kawasaki, etc.</i>
    </li>
    <li>
      QuantidadeRodas (Number)<br>
      <i>Indica a quantidade de rodas que o veículo possui</i>
    </li>
    <li>
      TipoMotor (Number)<br>
      <i>
        Indica o tipo de motor usado pelo veículo, sendo:
        <ul>
          <li>Combustão = 0</li>
          <li>Elétrico = 1</li>
        </ul>
      </i>
    </li>
  </ul>
  
  Método:
  <ul>
    <li>
      acelerar()<br>
      <i>
        Este método irá exibir duas mensagens, uma abaixo da outra, 
        <ul>
          <li>
            A primeira mensagem refere-se ao tipo de motor.<br>
            Se o motor for do tipo 0 (Combustão), então a mensagem deverá aparecer como: "Acelerando com motor à combustão!"<br>
            Se o motor for do tipo 1 (Elétrico), então a mensagem deverá aparecer como: "Acelerando com motor elétrico!"
          </li>
          <li>
            A segunda mensagem, deverá ser uma interpolação de strings, contendo a seguinte mensagem: `Acelerando <nome> com <quantidadeRodas> rodas!`
          </li>
        </ul>
      </i>
    </li>
  </ul>
</div>



<h2>Classes Concretas:</h2>
Você deve criar duas classes concretas que herdam da classe abstrata Veiculo. <br>
Como Veiculo possui um método em comum `acelerar()`, não é necessário sobrescrever o método (override).<br>
As classes serão `Carro` e `Moto` que herdem de `Veiculo`.


<div>
   Instanciando as classes e utilizando-os:
  <ul>
    <li>
      new Carro()<br>
      <i>Ao instanciar a classe `Carro`, você deve passar os parâmetros necessários para o construtor, que por sua vez será repassado para `Veiculo` via `super`.</i>
    </li>
    <li>
      new Moto()<br>
      <i> O mesmo acontece com a classe `Moto`, que deverá passar os parâmetros do construtor para a super classe `Veiculo`.</li>
    </li>
  </ul>

  Você deverá instanciar uma classe `Carro` e uma classe `Moto` que tenham o `tipoMotor` como combustão, 
  e o mesmo deverá ser feito para uma classe `Carro` e `Moto` com foco em motor elétrico. 
  O resultado deverá aparecer assim:
  <ul>
    <li><i>Acelerando com motor à combustão!<br>Acelerando <nome> com <quantidadeRodas> rodas!</i></li>
    <li><i>Acelerando com motor à combustão!<br>Acelerando <nome> com <quantidadeRodas> rodas!</i></li>
    <li><i>Acelerando com motor elétrico!<br>Acelerando <nome> com <quantidadeRodas> rodas!</i></li>
    <li><i>Acelerando com motor elétrico!<br>Acelerando <nome> com <quantidadeRodas> rodas!</i></li>
  </ul>
</div>
<br><br><br><br>




