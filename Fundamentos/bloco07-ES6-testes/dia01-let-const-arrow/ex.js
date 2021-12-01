//testando var, let e const. com var os dois consoles são imprimidos pois vaza do escopo, com let e const não, só imprimi o console dentro do escopo

if (true) {
    // inicio do escopo do if
    const userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20