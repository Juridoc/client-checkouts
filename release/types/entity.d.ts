/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as ApiProfiles from '@juridoc/client-profiles';
import * as Types from './types';
/**
 * Checkout entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Checkout Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Profile entity.
     */
    profile: ApiProfiles.Entity;
    /**
     * Card Id.
     */
    cardId: string;
    /**
     * Invoice Id.
     */
    invoiceId: string;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Context type.
     */
    contextType: Types.Context;
    /**
     * Checkout status.
     */
    status: Types.Status;
    /**
     * Checkout total.
     */
    total: number;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * Last error response.
     */
    lastError?: RestDB.Entity | null;
}
