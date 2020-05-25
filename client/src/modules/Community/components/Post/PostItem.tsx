import React from 'react';
import Card from 'react-bootstrap/Card';

const PostItem: React.FC<{}> = props => {
    return (
        <Card className="postItem shadowPage mt-4">
            <Card.Header className="d-flex">
                <div className="avatar">
                    <div className="defaultAvatar">
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path fill="none" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                            <path fill="none" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                        </svg>
                    </div>
                </div>
                <div className="name">
                    <p>Lê Văn An</p>
                    <time>20/05/2020</time>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Màu khó sử dụng, tuy vậy chất son ổn, mau khô và lì lại trên môi, không gây khó chịu hay khô môi. Có mùi nhẹ sẽ, bay dần theo thời gian.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ul className="list d-flex align-items-center">
                    <li>
                        <a href="javascript:;">
                            <svg viewBox="0 0 98 100" data-radium="true" className="svg-icon"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-1260.000000, -1768.000000)" fillRule="nonzero" fill="#2E3E4E"><g transform="translate(1260.000000, 1768.000000)"><path d="M94.2745303,67.8705637 C96.3204593,65.2609603 97.3016701,62.4634656 97.1764092,59.5824635 C97.0511482,56.4091858 95.631524,53.9248434 94.4624217,52.4008351 C95.8194154,49.0187891 96.3413361,43.6951983 91.8110647,39.5615866 C88.4916493,36.5344468 82.8549061,35.177453 75.0469729,35.5532359 C69.5563674,35.8037578 64.9634656,36.8267223 64.7755741,36.868476 L64.7546973,36.868476 C63.7108559,37.0563674 62.6043841,37.2860125 61.4770355,37.5365344 C61.3935282,36.2004175 61.6231733,32.8810021 64.0866388,25.4070981 C67.0093946,16.5135699 66.84238,9.70772443 63.5438413,5.1565762 C60.0782881,0.375782881 54.545929,5.68434189e-14 52.9175365,5.68434189e-14 C51.3517745,5.68434189e-14 49.9112735,0.647181628 48.888309,1.83716075 C46.5709812,4.5302714 46.84238,9.49895616 47.1346555,11.7954071 C44.3789144,19.1858038 36.6544885,37.3068894 30.1200418,42.3382046 C29.9947808,42.4217119 29.8903967,42.526096 29.7860125,42.6304802 C27.8653445,44.6555324 26.5709812,46.8475992 25.6941545,48.7682672 C24.4624217,48.1002088 23.0636743,47.7244259 21.5605428,47.7244259 L8.8256785,47.7244259 C4.02400835,47.7244259 0.14091858,51.6283925 0.14091858,56.4091858 L0.14091858,90.3340292 C0.14091858,95.1356994 4.04488518,99.0187891 8.8256785,99.0187891 L21.5605428,99.0187891 C23.4185804,99.0187891 25.151357,98.434238 26.5709812,97.4321503 L31.4770355,98.0167015 C32.2286013,98.1210856 45.5897704,99.8121086 59.3058455,99.5407098 C61.7901879,99.7286013 64.1283925,99.8329854 66.2995825,99.8329854 C70.0365344,99.8329854 73.2933194,99.5407098 76.0073069,98.9561587 C82.3956159,97.5991649 86.7588727,94.8851775 88.9718163,90.8977035 C90.6628392,87.8496868 90.6628392,84.822547 90.3914405,82.9018789 C94.545929,79.1440501 95.276618,74.9895616 95.1304802,72.0668058 C95.0469729,70.3757829 94.67119,68.9352818 94.2745303,67.8705637 Z M8.8256785,93.3820459 C7.13465553,93.3820459 5.7776618,92.0041754 5.7776618,90.3340292 L5.7776618,56.388309 C5.7776618,54.697286 7.15553236,53.3402923 8.8256785,53.3402923 L21.5605428,53.3402923 C23.2515658,53.3402923 24.6085595,54.7181628 24.6085595,56.388309 L24.6085595,90.3131524 C24.6085595,92.0041754 23.2306889,93.3611691 21.5605428,93.3611691 L8.8256785,93.3611691 L8.8256785,93.3820459 Z M88.9300626,65.4279749 C88.0532359,66.3465553 87.8862213,67.7453027 88.5542797,68.8308977 C88.5542797,68.8517745 89.4102296,70.3131524 89.5146138,72.3173278 C89.6607516,75.0521921 88.3455115,77.473904 85.5897704,79.5407098 C84.6085595,80.2922756 84.2118998,81.5866388 84.6294363,82.7557411 C84.6294363,82.776618 85.5271399,85.5323591 84.065762,88.1419624 C82.6670146,90.6471816 79.5563674,92.4425887 74.8382046,93.4446764 C71.059499,94.2588727 65.9237996,94.4050104 59.6189979,93.9039666 C59.5354906,93.9039666 59.4311065,93.9039666 59.3267223,93.9039666 C45.9029228,94.1962422 32.3329854,92.4425887 32.1868476,92.4217119 L32.1659708,92.4217119 L30.0574113,92.17119 C30.1826722,91.5866388 30.2453027,90.960334 30.2453027,90.3340292 L30.2453027,56.388309 C30.2453027,55.4906054 30.0991649,54.6137787 29.848643,53.7995825 C30.2244259,52.4008351 31.2682672,49.2901879 33.7317328,46.6388309 C43.105428,39.2066806 52.2703549,14.1336117 52.6670146,13.0480167 C52.8340292,12.6096033 52.8757829,12.1294363 52.7922756,11.6492693 C52.4373695,9.31106472 52.5626305,6.45093946 53.0636743,5.59498956 C54.1701461,5.61586639 57.1555324,5.92901879 58.9509395,8.41336117 C61.0803758,11.3569937 60.9968685,16.6179541 58.7004175,23.5908142 C55.1931106,34.217119 54.9008351,39.8121086 57.677453,42.2755741 C59.0553236,43.5073069 60.8924843,43.5699374 62.2286013,43.0897704 C63.5020877,42.7974948 64.7129436,42.5469729 65.8611691,42.3590814 C65.9446764,42.3382046 66.0490605,42.3173278 66.1325678,42.2964509 C72.5417537,40.8977035 84.0240084,40.0417537 88.0114823,43.6743215 C91.3935282,46.7640919 88.9926931,50.8559499 88.7212944,51.2943633 C87.9488518,52.4634656 88.1784969,53.9874739 89.2223382,54.9269311 C89.243215,54.9478079 91.4352818,57.0146138 91.539666,59.7912317 C91.6231733,61.6492693 90.7463466,63.5490605 88.9300626,65.4279749 Z"></path></g></g></g></svg>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className="actions ml-auto mr-0">
                        <a href="javascript:;">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path fill="none" d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
                                    c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654
                                    c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857z M18.346,11.274
                                    H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
                                    S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786
                                    C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </Card.Footer>
        </Card>
    )
}

export default PostItem;