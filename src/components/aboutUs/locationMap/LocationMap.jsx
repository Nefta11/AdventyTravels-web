import './LocationMap.css';

const LocationMap = () => {
    return (
        <div className="location-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.639992938482!2d-99.16634228509456!3d19.42847098688814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d085cbd5fe22a3%3A0x94318d0a9ddb9e23!2sADVENTY%20TRAVELS!5e0!3m2!1sen!2smx!4v1633024800000!5m2!1sen!2smx"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
            ></iframe>
        </div>
    );
};

export default LocationMap;
