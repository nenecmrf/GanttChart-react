import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProjectForm from '../ProjectForm/index'


const styles = theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing.unit * 2,
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing.unit,
    },
});

class Modal extends Component {
    state = {
        fullWidth: true,
        maxWidth: 'xl',
    };

    handleMaxWidthChange = event => {
        this.setState({maxWidth: event.target.value});
    };

    handleFullWidthChange = event => {
        this.setState({fullWidth: event.target.checked});
    };

    render() {
        const {open, handleClose, title} = this.props;

        return (
            <React.Fragment>
                <Dialog
                    fullWidth={this.state.fullWidth}
                    maxWidth={this.state.maxWidth}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <ProjectForm/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

Modal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Modal);