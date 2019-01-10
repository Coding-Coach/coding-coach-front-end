import React from 'react';
import Icon from './Icon.js';

export default function Dashboard({ active, ...props }) {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      {active ? (
        <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-5" transform="translate(15.000000, 15.000000)">
            <path
              d="M44.1940916,42.8409798 C39.1471856,48.2809744 32.3243291,50.9988316 25.5026399,50.999999 C18.6358126,51.0019444 11.7701527,48.2490682 6.71546422,42.7464286 C-2.32071543,32.9100031 -2.4012636,17.3429259 7.46841436,7.47381612 C12.4526718,2.48984564 18.9774612,-0.00116689225 25.5026399,4.10061094e-07 C32.0247055,0.00116771237 38.5467711,2.49295843 43.5286938,7.47381612 C53.3217149,17.2662734 53.4295015,32.8882136 44.1940916,42.8409798 Z"
              id="Path"
              fill="#69D5B1"
            />
            <path
              d="M44.32685,42.8409806 C39.3783906,48.2809753 32.688623,50.9988327 26,51 L26,0 C32.394844,0.00116730234 38.789688,2.49295809 43.6744316,7.47381592 C53.2764267,17.2662735 53.3821108,32.8882141 44.32685,42.8409806 Z"
              id="Path"
              fill="#179A6F"
            />
            <path
              d="M28.8471254,34 L23.1536014,34 C22.3626113,33.8207457 21.861129,33.0115289 22.0341461,32.1908369 L24.5633282,20.1962279 C24.7126652,19.4831676 25.3229994,18.9972418 25.9994086,19.0000118 C26.1010036,19.0000118 26.2045083,19.0114873 26.308395,19.0356253 C26.8606748,19.1610637 27.2712563,19.5935692 27.4102811,20.1226268 L29.9658167,32.1900455 C30.1388338,33.0103419 29.6381154,33.8195585 28.8471254,34 Z"
              id="Path"
              fill="#FF9996"
            />
            <path
              d="M28.8472959,34 L26,34 L26,19 C26.10158,19 26.2050694,19.0114755 26.3089407,19.0356135 C26.8611389,19.1610521 27.2716597,19.5935579 27.410664,20.1226159 L29.9658218,32.1900441 C30.1388133,33.0103411 29.6381689,33.8195584 28.8472959,34 Z"
              id="Path"
              fill="#FF6961"
            />
            <path
              d="M32,36.4998097 C32,40.083209 29.0858723,42.9980976 25.5039951,43 L25.5001902,43 C21.9160301,43 19,40.0839699 19,36.4998097 C19,32.9160301 21.9160301,30 25.5001902,30 L25.5039951,30 C29.0858723,30.0019024 32,32.916791 32,36.4998097 Z"
              id="Path"
              fill="#2D475C"
            />
            <path
              d="M27,7.45155498 L27,12.548445 C27,13.3488987 26.3299909,13.9981094 25.5041021,14 L25.5001953,14 C24.6719625,14 24,13.349655 24,12.548445 L24,7.45155498 C24,6.64921067 24.6719625,6 25.5001953,6 L25.5041021,6 C26.3299909,6.00189051 27,6.65034502 27,7.45155498 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M13.4998047,27 L7.49980467,27 C6.67157184,27 6,26.3284282 6,25.5001953 C6,24.6715718 6.67157184,24 7.49980467,24 L13.4998047,24 C14.3284282,24 15,24.6715718 15,25.5001953 C15,26.3284282 14.3284282,27 13.4998047,27 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M43.4998698,27 L37.5001302,27 C36.6715426,27 36,26.3284282 36,25.5001953 C36,24.6715718 36.6715426,24 37.5001302,24 L43.4998698,24 C44.3284573,24 45,24.6715718 45,25.5001953 C45,26.3284282 44.3284573,27 43.4998698,27 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <path
              d="M16.5016083,19 C15.6760085,19 15.7730691,18.8912331 11.4591355,14.5768142 C10.0601377,13.1772693 12.174811,11.0584596 13.5757578,12.4599538 L17.5599194,16.4445635 C18.505578,17.3903283 17.8230355,19 16.5016083,19 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M34.4979572,19 C33.1766535,19 32.4945644,17.3901998 33.4401346,16.4443595 L37.4239241,12.4594317 C38.8227912,11.059775 40.9411647,13.174855 39.5403488,14.5764611 C35.2895702,18.8280644 35.3242593,19 34.4979572,19 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <path
              d="M25,14 L25,6 C26.1042047,6.00189051 27,6.65034502 27,7.45155498 L27,12.548445 C27,13.3488987 26.1042047,13.9981094 25,14 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <path
              d="M46,25.8943963 C46,30.034022 44.734007,34.0026656 42.339612,37.3711275 C42.0480594,37.7809414 41.5861746,37.9980615 41.1172739,37.9980615 L41.1172739,38 L36.3035382,38 C35.4772127,38 34.8067977,37.3331314 34.8067977,36.5115648 C34.8067977,35.6888351 35.4772127,35.0227418 36.3035382,35.0227418 L40.321351,35.0227418 C42.0800211,32.2994366 43.0069088,29.1605016 43.0069088,25.8943963 C43.0069088,16.567541 35.3793789,8.97958449 26.0040927,8.97764584 L26.0001949,8.97764584 C16.6225701,8.97764584 8.99309124,16.5667657 8.99309124,25.8943963 C8.99309124,29.1605016 9.91997892,32.2994366 11.6790389,35.0227418 L15.7058165,35.0227418 C16.5329215,35.0227418 17.2021671,35.6888351 17.2021671,36.5115648 C17.2021671,37.3331314 16.5329215,38 15.7058165,38 L10.8838955,38 C10.4149947,38 9.95272022,37.7809414 9.66038804,37.3711275 C7.265993,34.0026656 6,30.034022 6,25.8943963 C6,14.9251833 14.9722577,6 26.0001949,6 L26.0040927,6 C37.0296912,6.00232634 46,14.9259587 46,25.8943963 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M32,36.4998097 C32,40.083209 28.8597786,42.9980976 25,43 L25,30 C28.8597786,30.0019024 32,32.916791 32,36.4998097 Z"
              id="Path"
              fill="#223C4D"
            />
            <path
              d="M46,25.8943963 C46,30.034022 44.7337479,34.0026656 42.3388628,37.3711275 C42.0472505,37.7809414 41.5852712,37.9980615 41.1162745,37.9980615 L41.1162745,38 L36.3015536,38 C35.475059,38 34.8045067,37.3331314 34.8045067,36.5115648 C34.8045067,35.6888351 35.475059,35.0227418 36.3015536,35.0227418 L40.3201887,35.0227418 C42.0792187,32.2994366 43.0062961,29.1605016 43.0062961,25.8943963 C43.0062961,16.567541 35.3772051,8.97958449 26,8.97764584 L26,6 C37.0278551,6.00232634 46,14.9259587 46,25.8943963 Z"
              id="Path"
              fill="#F1F2F2"
            />
          </g>
        </g>
      ) : (
        <g id="dashboard-grey" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-6-Copy-2" transform="translate(15.000000, 15.000000)">
            <path
              d="M44.1940916,42.8409798 C39.1471856,48.2809744 32.3243291,50.9988316 25.5026399,50.999999 C18.6358126,51.0019444 11.7701527,48.2490682 6.71546422,42.7464286 C-2.32071543,32.9100031 -2.4012636,17.3429259 7.46841436,7.47381612 C12.4526718,2.48984564 18.9774612,-0.00116689225 25.5026399,4.10061094e-07 C32.0247055,0.00116771237 38.5467711,2.49295843 43.5286938,7.47381612 C53.3217149,17.2662734 53.4295015,32.8882136 44.1940916,42.8409798 Z"
              id="Path"
              fill="#BFBFBF"
            />
            <path
              d="M44.32685,42.8409806 C39.3783906,48.2809753 32.688623,50.9988327 26,51 L26,0 C32.394844,0.00116730234 38.789688,2.49295809 43.6744316,7.47381592 C53.2764267,17.2662735 53.3821108,32.8882141 44.32685,42.8409806 Z"
              id="Path"
              fill="#898889"
            />
            <path
              d="M28.8471254,34 L23.1536014,34 C22.3626113,33.8207457 21.861129,33.0115289 22.0341461,32.1908369 L24.5633282,20.1962279 C24.7126652,19.4831676 25.3229994,18.9972418 25.9994086,19.0000118 C26.1010036,19.0000118 26.2045083,19.0114873 26.308395,19.0356253 C26.8606748,19.1610637 27.2712563,19.5935692 27.4102811,20.1226268 L29.9658167,32.1900455 C30.1388338,33.0103419 29.6381154,33.8195585 28.8471254,34 Z"
              id="Path"
              fill="#DDDCDC"
            />
            <path
              d="M28.8472959,34 L26,34 L26,19 C26.10158,19 26.2050694,19.0114755 26.3089407,19.0356135 C26.8611389,19.1610521 27.2716597,19.5935579 27.410664,20.1226159 L29.9658218,32.1900441 C30.1388133,33.0103411 29.6381689,33.8195584 28.8472959,34 Z"
              id="Path"
              fill="#BFBFBF"
            />
            <path
              d="M32,36.4998097 C32,40.083209 29.0858723,42.9980976 25.5039951,43 L25.5001902,43 C21.9160301,43 19,40.0839699 19,36.4998097 C19,32.9160301 21.9160301,30 25.5001902,30 L25.5039951,30 C29.0858723,30.0019024 32,32.916791 32,36.4998097 Z"
              id="Path"
              fill="#DDDCDC"
            />
            <path
              d="M27,7.45155498 L27,12.548445 C27,13.3488987 26.3299909,13.9981094 25.5041021,14 L25.5001953,14 C24.6719625,14 24,13.349655 24,12.548445 L24,7.45155498 C24,6.64921067 24.6719625,6 25.5001953,6 L25.5041021,6 C26.3299909,6.00189051 27,6.65034502 27,7.45155498 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M13.4998047,27 L7.49980467,27 C6.67157184,27 6,26.3284282 6,25.5001953 C6,24.6715718 6.67157184,24 7.49980467,24 L13.4998047,24 C14.3284282,24 15,24.6715718 15,25.5001953 C15,26.3284282 14.3284282,27 13.4998047,27 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M43.4998698,27 L37.5001302,27 C36.6715426,27 36,26.3284282 36,25.5001953 C36,24.6715718 36.6715426,24 37.5001302,24 L43.4998698,24 C44.3284573,24 45,24.6715718 45,25.5001953 C45,26.3284282 44.3284573,27 43.4998698,27 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <path
              d="M16.5016083,19 C15.6760085,19 15.7730691,18.8912331 11.4591355,14.5768142 C10.0601377,13.1772693 12.174811,11.0584596 13.5757578,12.4599538 L17.5599194,16.4445635 C18.505578,17.3903283 17.8230355,19 16.5016083,19 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M34.4979572,19 C33.1766535,19 32.4945644,17.3901998 33.4401346,16.4443595 L37.4239241,12.4594317 C38.8227912,11.059775 40.9411647,13.174855 39.5403488,14.5764611 C35.2895702,18.8280644 35.3242593,19 34.4979572,19 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <path
              d="M25,14 L25,6 C26.1042047,6.00189051 27,6.65034502 27,7.45155498 L27,12.548445 C27,13.3488987 26.1042047,13.9981094 25,14 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <path
              d="M46,25.8943963 C46,30.034022 44.734007,34.0026656 42.339612,37.3711275 C42.0480594,37.7809414 41.5861746,37.9980615 41.1172739,37.9980615 L41.1172739,38 L36.3035382,38 C35.4772127,38 34.8067977,37.3331314 34.8067977,36.5115648 C34.8067977,35.6888351 35.4772127,35.0227418 36.3035382,35.0227418 L40.321351,35.0227418 C42.0800211,32.2994366 43.0069088,29.1605016 43.0069088,25.8943963 C43.0069088,16.567541 35.3793789,8.97958449 26.0040927,8.97764584 L26.0001949,8.97764584 C16.6225701,8.97764584 8.99309124,16.5667657 8.99309124,25.8943963 C8.99309124,29.1605016 9.91997892,32.2994366 11.6790389,35.0227418 L15.7058165,35.0227418 C16.5329215,35.0227418 17.2021671,35.6888351 17.2021671,36.5115648 C17.2021671,37.3331314 16.5329215,38 15.7058165,38 L10.8838955,38 C10.4149947,38 9.95272022,37.7809414 9.66038804,37.3711275 C7.265993,34.0026656 6,30.034022 6,25.8943963 C6,14.9251833 14.9722577,6 26.0001949,6 L26.0040927,6 C37.0296912,6.00232634 46,14.9259587 46,25.8943963 Z"
              id="Path"
              fill="#FFFFFF"
            />
            <path
              d="M32,36.4998097 C32,40.083209 28.8597786,42.9980976 25,43 L25,30 C28.8597786,30.0019024 32,32.916791 32,36.4998097 Z"
              id="Path"
              fill="#BFBFBF"
            />
            <path
              d="M46,25.8943963 C46,30.034022 44.7337479,34.0026656 42.3388628,37.3711275 C42.0472505,37.7809414 41.5852712,37.9980615 41.1162745,37.9980615 L41.1162745,38 L36.3015536,38 C35.475059,38 34.8045067,37.3331314 34.8045067,36.5115648 C34.8045067,35.6888351 35.475059,35.0227418 36.3015536,35.0227418 L40.3201887,35.0227418 C42.0792187,32.2994366 43.0062961,29.1605016 43.0062961,25.8943963 C43.0062961,16.567541 35.3772051,8.97958449 26,8.97764584 L26,6 C37.0278551,6.00232634 46,14.9259587 46,25.8943963 Z"
              id="Path"
              fill="#F1F2F2"
            />
            <g id="Group-4">
              <g id="speedometer-copy" />
            </g>
          </g>
        </g>
      )}
    </Icon>
  );
}
