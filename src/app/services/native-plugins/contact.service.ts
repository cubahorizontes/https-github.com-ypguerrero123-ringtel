import {AppService} from '../app.service';
import {Contact} from '@ionic-native/contacts/ngx';
import {Utils} from '../utils/utils';
import {Constants} from '../../config/constants';
import {ContactInterface} from '../../model/contact';

export class ContactService {

    /**
     * Constructor ContactService
     * @param appService
     */
    constructor(private appService: AppService) {
    }

    /**
     * @method contactsList
     * @method contactsName
     */
    public async contactsList(contactsName: ContactInterface[] = []) {
        const isMobilWeb = await this.appService.getStorage(Constants.IS_MOBIL_WEB, false);
        if (!isMobilWeb) {

            const options = {
                filter: '',
                multiple: true,
                hasPhoneNumber: true
            };

            this.appService.contacts.find(['*'], options).then((res: Contact[]) => {
                res.forEach((item: Contact, key: number) => {
                    contactsName.push({
                        id: key,
                        name: item.displayName ? item.displayName : (item.name && item.name.formatted ? item.name.formatted : ''),
                        phone: Utils.strFixPhoneNumber(item.phoneNumbers[0].value)
                    });
                });
            });
        }
    }

    /**
     * @method filterContactName
     * @param contactsName
     * @param value
     */
    public filterContactName(contactsName: ContactInterface[], value: string): ContactInterface[] {

        if (value.length == 0) {
            return [];
        }

        const lowerFilterName = value.toLowerCase();
        return contactsName.filter((option: ContactInterface) => {
            return option.name.toLowerCase().includes(lowerFilterName) || option.phone.toLowerCase().includes(lowerFilterName);
        });
    }

    /**
     * @method optionSelected
     * @param contactsName
     * @param name
     */
    public async optionSelected(contactsName: ContactInterface[], name) {
        return contactsName.filter((option: ContactInterface) => {
            return option.name == name;
        });
    }
}
