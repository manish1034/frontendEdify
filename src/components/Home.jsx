/* eslint-disable react/no-unescaped-entities */

const Home = () => {
  
  return (
    <>
      <section className="home-page">
        <div id="blur"></div>
        <div id="blob"></div>
        <div className="home-outer-container">

          <div className="home-inner-container home_inner_container" >
            <div className="home-heading">
              <h1 className="home_head" >
                Learning is FUN, with our digit platform
              </h1>
            </div>
            <div className="home-subheading">
              <p className="home_subhead" >
                we provide everything in a single place so that you
                don't have to waste your time
                searching for it
              </p>
            </div>
            <button className='home_btn'> Sign up </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;