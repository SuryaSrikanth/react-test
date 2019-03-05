import React from 'react';

class Meme extends React.Component {
    constructor(){
        super();
        this.state = {
            topText:"",
            bottomText:"",
            image :"http://i.imgflip.com/1bij.jpg",
            memeImages:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{
            const {memes} = response.data;
            this.setState({memeImages: memes});
        });
    }

    handleChange(event){
        this.setState(
            {[event.target.name]:event.target.value}
        )
    }

    handleSubmit(event){
        event.preventDefault();
        let rand = Math.floor(Math.random() * this.state.memeImages.length);
        console.log(rand);
        let im = this.state.memeImages[rand].url;
        this.setState({
                image: im
            }
        )
    }
    render(){
        return (
            <div >
            <form className="meme-form" >
            <input 
            type="text" 
            name='topText'
            value={this.state.topText}
            placeholder="Top Text" 
            onChange = {this.handleChange}
            />
            <br />
            <input 
            type="text" 
            name='bottomText' 
            value={this.state.bottomText}
            placeholder="Botttom Text"
            onChange = {this.handleChange}
            />
            <button onClick={this.handleSubmit}>Generate</button>
            </form>           
           <div className='meme'>
            <img src={this.state.image} alt=""/>
            <h2 className='top'>{this.state.topText}</h2>
            <h2 className='bottom'>{this.state.bottomText}</h2>
           </div>
           </div>     
        )
    }
}
export default Meme;