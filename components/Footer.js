import data from '../data/footerSection.json';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="header-footer">
                <h3>{data.title}</h3>
            </div>

            <form>
                <div className="form-group">
                    <input type="text" placeholder="John Doe" />
                    <input type="email" placeholder="Name@company.com" />
                    <textarea type="text" placeholder="How Can We Help" />
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </footer>
    )
};

export default Footer;