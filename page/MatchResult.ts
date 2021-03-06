import { FilledField } from "./FilledField";
import { keeLoginInfo, keeLoginField } from "../common/kfDataModel";
export class MatchResult {
    logins: keeLoginInfo[][];
    submitTargets: HTMLElement[];
    usernameIndexArray: number[];
    passwordFieldsArray: keeLoginField[][];
    otherFieldsArray: keeLoginField[][];
    currentPage: number;
    allMatchingLogins: any[];
    formRelevanceScores: number[];
    UUID: string;
    mustAutoFillForm: boolean;
    cannotAutoFillForm: boolean;
    mustAutoSubmitForm: boolean;
    cannotAutoSubmitForm: boolean;
    dbFileName: string;
    doc: Document;
    forms: HTMLFormElement[];
    formReadyForSubmit: boolean;
    autofillOnSuccess: boolean;
    autosubmitOnSuccess: boolean;
    notifyUserOnSuccess: boolean;
    wrappers: any[];
    requestCount: number;
    responseCount: number;
    requestIds: any[];
    mostRelevantFormIndex?: number;
    lastFilledOther: FilledField[];
    lastFilledPasswords: FilledField[];
}
