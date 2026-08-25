import React from 'react';
import './tests.css';

export default function Tests() {
    return (
        <div className="tests">
            <div className="tests-hero">
                <div className="tests-hero-text">
                    <h2>Тесты</h2>
                    <p>Здесь вы можете пройти тесты</p>
                </div>

                <img 
                    src="/images/iskra-test.png" 
                    alt="Тесты" 
                />
            </div>
            
            <iframe
                src="https://eu.forms.app/form/6a8c1ab28a7005cc9db747d1"
                title="Тест"
                className="tests-iframe"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}