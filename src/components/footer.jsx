export const Footer = (props) => {
    return (
      <div id='footer' className='text-center'>
  
        <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li>
                      <a href={props.data ? props.data.instagram : '/'}>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.twitter : '/'}>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.tiktok : '/'}>
                        <i className='fab fa-tiktok'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
  
  
        <div id='footer'>
          <div className='container text-center'>
            <p>
              &copy; 2022 patrocima
            </p>
          </div>
        </div>
      </div>
    )
  }