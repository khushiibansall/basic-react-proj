import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.jpg'
import CortanaImage from './images/cortana.jpg'
import SiriImage from './images/siri.jpg'

function App(){
    return(
        <div>
            <div>
                <section className='hero is-primary'>
                    <div className='hero-body'>
                        <p className='title'>
                        Personal Digital Assistants
                        </p>
                    </div>

                </section>
            </div>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className='column is-3'>
                        <ProfileCard 
                        title="Alexa" 
                        handle="@alexa99" 
                        image={AlexaImage}
                        description="Alexa was created by Amazon"
                        />
                        </div>
                        <div className='column is-3'>
                        <ProfileCard 
                        title="Cortana" 
                        handle="@cortana32" 
                        image={CortanaImage}
                        description="Cortana was made by Microsoft. IDK what it does"
                        />
                        </div>
                        <div className='column is-3'>
                        <ProfileCard 
                        title="Siri" 
                        handle="@siri557" 
                        image={SiriImage}
                        description="siri was made by Apple and is being phased out"
                        />
                        </div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    );
}
export default App;