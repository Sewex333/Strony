 return (
    <>
      <nav className='navbar'>
        <h1 className='title'>Future </h1>
        <div id='links'>
          <a href="#">Kontakt</a>
          <a href="#">Gowno</a>
          <a href="#">Chuj</a>
          <a href="#">Cipa</a>
        </div>
      </nav>
      <main>
        <img src="pobrane.jpg" alt="MainPhoto" id='zdjecieMain' />
        <section>
          <img src="pobrane.jpg" alt="smallPhoto" id='smallPhoto' />
          <div id='desc'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo consequatur maxime fugiat quisquam accusamus odit id, debitis enim ipsa temporibus fuga qui porro nihil at in, aliquam iste doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatem vitae consequatur, officia repellat minus voluptas corrupti accusamus hic voluptates quis fuga eum, adipisci illo incidunt optio magnam vel illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut! Fugiat rerum deleniti, tenetur consectetur commodi dolore odio non iure perspiciatis fuga explicabo eveniet beatae iusto debitis illo necessitatibus culpa.</p>
          </div>
        </section>
      </main>
    </>
  )




#root{
  height: 100%;
  width: 100%;
  background-color: green;
}
body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.navbar{
  margin: 0;
  width: 100%;
  height:50%;
  background-color: black;
  text-align: center;
  color: white;
}
.title{
  padding: 10px;
  color: white;
  margin: 0;
  font-size: 5vh;
}
a{
  color: white;
}
#links{
  display: flex;
  justify-content: center;
  align-items: center;
}
#zdjecieMain{
  width: 100%;
  height: 70vh;
  padding-bottom: 110px;
}
#desc{
  float: right;
  margin-right: 80px;
  width: 40%;
  font-size: 20px;
  height: 100%;
  background-color: navy;
  color: yellow;
}
#smallPhoto{
  padding: 30px;
  height: 30vh;
  margin-left: 70px;
}
