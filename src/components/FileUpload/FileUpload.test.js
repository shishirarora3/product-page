import React from 'react';
import FileUpload from './FileUpload';
import { mount } from 'enzyme';
import _ from 'lodash';
import AppContainerPseudo from '../../test/customHelper/Wrapper';
import {addImage} from '../../actions';
import example1 from '../../public/example1.png';

describe('FileUpload', () => {

    describe('isMultiple', () => {
        let wrapper,store, input;
        function renderFileUpload(isMultiple) {
            wrapper = mount(<AppContainerPseudo
                injectStore={(c)=>store = c}>
                <FileUpload
                    multiple={isMultiple}
                    typeRegex = {/^image/}
                />
            </AppContainerPseudo>);

            const subjectProps = _.get(wrapper.props(), 'children.props');
            return subjectProps;
        }


        it('imput should render with multiple as true', () => {
            expect(renderFileUpload(true).multiple).to.be.true;
        });

        it('input should be of type file', () => {
            input = wrapper.find('input');
            expect(input.node.type).to.be.file;
        });

        it('expect image list to be empty in store, initially', () =>{
            const {imageList} = store.getState();
            expect(imageList).to.be.empty;
        });

        /*it('should accept only files with given typeRegex', () =>{
            input.simulate('change', {
                target: {
                    files: [
                        example1
                    ]
                }
            });
            const {imageList} = store.getState();
            console.log(imageList);
            expect(imageList).to.be.empty;
        });*/

    });
});