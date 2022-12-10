import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

export default function Landing() {
    return (
        <main>
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
        </main>
    )
}


