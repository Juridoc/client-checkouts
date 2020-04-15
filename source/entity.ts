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
@RestDB.Schema.Entity('checkouts')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Checkout Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiProfiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: ApiProfiles.Entity;

  /**
   * Card Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public cardId!: string;

  /**
   * Invoice Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public invoiceId!: string;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * Context type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Context))
  @Class.Public()
  public contextType!: Types.Context;

  /**
   * Checkout status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Checkout total.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public total!: number;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * Last error response.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public lastError?: RestDB.Entity | null;
}
