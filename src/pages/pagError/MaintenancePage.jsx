const MaintenancePage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)',
            color: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            textAlign: 'center',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                animation: 'float 6s ease-in-out infinite'
            }}></div>
            <div style={{
                position: 'absolute',
                top: '60%',
                right: '15%',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                animation: 'float 8s ease-in-out infinite reverse'
            }}></div>

            {/* Main content */}
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '60px 40px',
                maxWidth: '600px',
                width: '100%',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                zIndex: 2,
                position: 'relative'
            }}>
                {/* Icon */}
                <div style={{
                    fontSize: '80px',
                    marginBottom: '30px',
                    animation: 'pulse 2s infinite'
                }}>
                    ⚠️
                </div>

                {/* Title */}
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    marginBottom: '20px',
                    fontWeight: '700',
                    background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Servidor No Disponible
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: '1.3rem',
                    marginBottom: '15px',
                    opacity: 0.9,
                    lineHeight: '1.6'
                }}>
                    Estamos experimentando problemas técnicos
                </p>

                <p style={{
                    fontSize: '1.1rem',
                    opacity: 0.7,
                    marginBottom: '40px',
                    lineHeight: '1.5'
                }}>
                    Nuestros servidores están siendo restablecidos
                </p>

                {/* Loading animation */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '30px'
                }}>
                    {[0, 1, 2].map(i => (
                        <div
                            key={i}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                                animation: `bounce 1.4s infinite ease-in-out both`,
                                animationDelay: `${i * 0.16}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Contact info */}
                <div style={{
                    fontSize: '0.95rem',
                    opacity: 0.8,
                    color: '#f0f0f0'
                }}>
                    <p style={{ margin: '5px 0' }}>
                        Error 503 - Servicio temporalmente no disponible
                    </p>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                
                @keyframes bounce {
                    0%, 80%, 100% { 
                        transform: scale(0);
                    } 40% { 
                        transform: scale(1);
                    }
                }
                
                @media (max-width: 768px) {
                    .maintenance-container {
                        padding: 40px 20px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default MaintenancePage;
