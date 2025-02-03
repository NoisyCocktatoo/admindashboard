import './navbar.scss'

const Navbar = () => {
  return (

    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>JumpIn Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/463832067_8603931856331821_6267007011532801700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF2i5yBeVaf3iGfBbzgVB6db8RNCavkZ95vxE0Jq-Rn3ifg9GuGfzEf8IirkJMfIxK547qX6hWKSx0QHs688peO&_nc_ohc=WMnqLYuAykYQ7kNvgG39osb&_nc_oc=Adj2yfl1JOn2EC0KQIgiFRraMZPXP8BWIuVwqkhI4By7OZ7k5aaDzyCYt6avV-iHt38&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=AgbjvE1ZnB6HF6dl5NV2ouD&oh=00_AYCe7a0MLeSB9oil6xds2Sw4pGYJPzLp8z65P2pu5HStFw&oe=67A6D355" alt="" />
          <span>Dave</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar