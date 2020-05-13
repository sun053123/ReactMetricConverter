import React from 'react';
import { Jumbotron, Button} from 'reactstrap';

const Intro = (props) => {
    return(
            <div>
              <Jumbotron>
                <h1 className="display-3">Metric system</h1>
                <p className="lead">A metric system is a system of measurement that succeeded the decimalised system based on the metre introduced in France in the 1790s. The historical development of these systems culminated in the definition of the International System of Units (SI), under the oversight of an international standards body.</p>
                <hr className="my-2" />
                <p>Click on Input tab for see total.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </Jumbotron>
            </div>
          );
        };

export default Intro;