import Link from './Link'

export default elements = [
    {
        'title': 'Academic',
        'content':
            <ul>
                <li>I'm studying abroad at <b>U. of Oxford</b>, doing CompSci + Philosophy.</li>
                <li>I'm a <b>senior at Duke</b>, graduating Dec '22.</li>
                <li>My research interest is in <b>natural language processing</b>, especially the differences in human and machine cognition of language. I am also interested in how we can work collaboratively with machines.</li>
                <li>My advisor is <Link text="Bhuwan Dhingra" href="https://users.cs.duke.edu/~bdhingra/" /> at the Duke NLP group.</li>
                <li><i>Look on my Works, ye Mighty, and despair!</i> <Link text="Google Scholar" href="https://scholar.google.com/citations?user=STRJkvgAAAAJ" /></li>
            </ul>
    },
    {
        'title': 'Travel',
        'content':
            <iframe className="map" src="https://www.google.com/maps/d/u/1/embed?mid=1tCQAoqHOTlCBsCJsQyWEszxX-pWjWsS6&ehbc=2E312F"></iframe>
    },
    {
        'title': 'Contact',
        'content':
            <ul>
                <li>{"dev (dot) seth (at) duke (dot) edu"}</li>
            </ul>
    },
    {
        'title': 'More',
        'content':
            <ul>
                <li>Coming Soon</li>
            </ul>
    }

];

{/* <ul>
    <li>In the past, I've worked with <Link text="Bill Seaman" href="https://billseaman.com/" />, <Link text="Missy Cummings" href="https://pratt.duke.edu/faculty/missy-cummings" />, and <Link text="Bhargav Vaidya" href="https://www.iiti.ac.in/people/~bvaidya/" />.</li>
</ul> */}