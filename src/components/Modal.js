import React, {Component} from 'react';
import './Modal.css';
import UiState from '../store/store'
import {observer, inject} from 'mobx-react';

const Modal = inject("UiState")(observer(({ UiState }) =>

        <div id="modal" className="flex al-vert al-horiz hide" onClick="">
            <div className="cont-detail-film shadow flex">

                <div><img src="" alt=""/></div>
                <div className="resume">
                    <h2>{console.log(UiState)}</h2>
                    <p>resume</p>
                </div>

            </div>
        </div>
        ));



export default Modal;