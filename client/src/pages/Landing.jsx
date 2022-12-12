import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

export default function Landing() {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='Jobify' className='logo' />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                        I'm baby brunch hexagon man bun post-ironic lomo raw denim ramps. Kinfolk iPhone photo booth gentrify gochujang salvia wayfarers gastropub tilde banh mi ennui synth put a bird on it forage scenester. Fanny pack beard mumblecore pop-up you probably haven't heard of them pinterest paleo pork belly la croix shoreditch blue bottle. Pour-over taxidermy hashtag small batch blue bottle lomo four loko sriracha. Hell of wolf letterpress shoreditch tote bag.
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1 {
        font-weight: 700;
        span{
            color: var(--primary-500);
        }
    }
    p {
        color: var(--grey-600)
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`


