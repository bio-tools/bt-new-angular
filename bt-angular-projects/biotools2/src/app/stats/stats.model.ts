export interface Stats {
    totalAnnotationCount: {
        nameAnnotationCount: number,
        uniqueIDAnnotationCount: number,
        topicAnnotationCount: number,
        operatingSystemAnnotationCount: number,
        codeAvailabilityAnnotationCount: number,
        operationAnnotationCount: number,
        descriptionAnnotationCount: number,
        downloadsAnnotationCount: number,
        dataFormatsAnnotationCount: number,
        accessibilityAnnotationCount: number,
        toolTypeAnnotationCount: number,
        documentationAnnotationCount: number,
        inputOutputAnnotationCount: number,
        communityAnnotationCount: number,
        contactAnnotationCount: number,
        homepageAnnotationCount: number,
        publicationAnnotationCount: number
    };

    topDataTypes: {
        dataType: string,
        count: number
    }[];

    topContributors: {
        count: number,
        domain: string
    }[];

    totalEntries: number;
    edamAnnotationsCount: number;
    formatAnnotationsCount: number;

    topDataFormats: {
        count: number,
        dataFormat: string
    }[];

    functionAnnotationsCount: number;
    totalUsers: number;
    topicAnnotationsCount: number;

    // maybe should be datetime
    date: string;

    topFunctions: {
        function: string,
        count: number
    }[];

    dataTypeAnnotationsCount: number;

    topTopics: {
        topic: string,
        count: number
    }[];
}


export interface TotalEntriesStats{   
    date: string,
    entriesCount: number,
    creditAffiliationCount: number,
    dataTypeAnnotationsCount: number,
    edamAnnotationsCount: number,
    formatAnnotationsCount: number,
    functionAnnotationsCount: number,
    topicAnnotationsCount: number
}[]

export interface UserStats{
    date: string,
    newUsersCount: number,
    totalUsersCount: number
}[]

export interface AnnotationCountStats{
    date: string,
    nameAnnotationCount: number,
    uniqueIDAnnotationCount: number,
    topicAnnotationCount: number,
    operatingSystemAnnotationCount: number,
    codeAvailabilityAnnotationCount: number,
    operationAnnotationCount: number,
    descriptionAnnotationCount: number,
    downloadsAnnotationCount: number,
    dataFormatsAnnotationCount: number,
    accessibilityAnnotationCount: number,
    toolTypeAnnotationCount: number,
    documentationAnnotationCount: number,
    inputOutputAnnotationCount: number,
    communityAnnotationCount: number,
    contactAnnotationCount: number,
    homepageAnnotationCount: number,
    publicationAnnotationCount: number
}[]