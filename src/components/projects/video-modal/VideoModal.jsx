import './VideoModal.css';
import React, { useState } from "react";
import Modal from 'react-modal';

function VideoModal({ videoId, isOpen, onRequestClose }) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Video Modal"
            className="modal"
            style={{
                content: {
                    position: 'fixed',
                    borderRadius: '10px',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(5px)',
                    zIndex: '999',
                },
            }}
        >

            <button onClick={onRequestClose}>Close</button>

            <div className="video-responsive">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="HRF Walkthrough"
                />
            </div>
        </Modal>
    );
}

export default VideoModal; 