import React, { Component } from 'react';

import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render(){
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Mateus Castro</span>
                            <span className="place">Recife</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://www.olhardireto.com.br/conceito/imgsite/noticias/selfie1.png" alt="" />

                    <footer>
                        <div className="actions" >
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>

                        <strong>90 curtidas</strong>
                        <p>
                            Um post muito bom.
                            <span>#react #top</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Mateus Castro</span>
                            <span className="place">Recife</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://www.olhardireto.com.br/conceito/imgsite/noticias/selfie1.png" alt="" />

                    <footer>
                        <div className="actions" >
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>

                        <strong>90 curtidas</strong>
                        <p>
                            Um posto muito bom.
                            <span>#react #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;