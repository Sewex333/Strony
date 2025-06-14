import React from 'react'

const Aktualnosci = () => {
  return (
     <section className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Aktualności</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFutureSportClub&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
          width="500"
          height="700"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  )
}


export default Aktualnosci