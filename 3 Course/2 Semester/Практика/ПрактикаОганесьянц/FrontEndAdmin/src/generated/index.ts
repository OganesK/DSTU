import { gql } from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateDentalDisease = {
  __typename?: 'AggregateDentalDisease';
  _count?: Maybe<DentalDiseaseCountAggregateOutputType>;
  _max?: Maybe<DentalDiseaseMaxAggregateOutputType>;
  _min?: Maybe<DentalDiseaseMinAggregateOutputType>;
};

export type AggregateDentalProcedure = {
  __typename?: 'AggregateDentalProcedure';
  _avg?: Maybe<DentalProcedureAvgAggregateOutputType>;
  _count?: Maybe<DentalProcedureCountAggregateOutputType>;
  _max?: Maybe<DentalProcedureMaxAggregateOutputType>;
  _min?: Maybe<DentalProcedureMinAggregateOutputType>;
  _sum?: Maybe<DentalProcedureSumAggregateOutputType>;
};

export type AggregateMedicalRecord = {
  __typename?: 'AggregateMedicalRecord';
  _avg?: Maybe<MedicalRecordAvgAggregateOutputType>;
  _count?: Maybe<MedicalRecordCountAggregateOutputType>;
  _max?: Maybe<MedicalRecordMaxAggregateOutputType>;
  _min?: Maybe<MedicalRecordMinAggregateOutputType>;
  _sum?: Maybe<MedicalRecordSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DentalDiseaseCountAggregateOutputType = {
  __typename?: 'DentalDiseaseCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type DentalDiseaseCountOutputType = {
  __typename?: 'DentalDiseaseCountOutputType';
  medicalRecords: Scalars['Int'];
};

export type DentalDiseaseListRelationFilter = {
  every?: Maybe<DentalDiseaseWhereInput>;
  none?: Maybe<DentalDiseaseWhereInput>;
  some?: Maybe<DentalDiseaseWhereInput>;
};

export type DentalDiseaseMaxAggregateOutputType = {
  __typename?: 'DentalDiseaseMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DentalDiseaseMinAggregateOutputType = {
  __typename?: 'DentalDiseaseMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum DentalDiseaseScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type DentalProcedureAvgAggregateOutputType = {
  __typename?: 'DentalProcedureAvgAggregateOutputType';
  price?: Maybe<Scalars['Float']>;
};

export type DentalProcedureCountAggregateOutputType = {
  __typename?: 'DentalProcedureCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
};

export type DentalProcedureCountOutputType = {
  __typename?: 'DentalProcedureCountOutputType';
  medicalRecords: Scalars['Int'];
};

export type DentalProcedureListRelationFilter = {
  every?: Maybe<DentalProcedureWhereInput>;
  none?: Maybe<DentalProcedureWhereInput>;
  some?: Maybe<DentalProcedureWhereInput>;
};

export type DentalProcedureMaxAggregateOutputType = {
  __typename?: 'DentalProcedureMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type DentalProcedureMinAggregateOutputType = {
  __typename?: 'DentalProcedureMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export enum DentalProcedureScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Price = 'price'
}

export type DentalProcedureSumAggregateOutputType = {
  __typename?: 'DentalProcedureSumAggregateOutputType';
  price?: Maybe<Scalars['Float']>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumuserRoleFieldUpdateOperationsInput = {
  set?: Maybe<UserRole>;
};

export type EnumuserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<Maybe<UserRole>>>;
  not?: Maybe<NestedEnumuserRoleFilter>;
  notIn?: Maybe<Array<Maybe<UserRole>>>;
};

export type EnumuserRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumuserRoleFilter>;
  _min?: Maybe<NestedEnumuserRoleFilter>;
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<Maybe<UserRole>>>;
  not?: Maybe<NestedEnumuserRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<UserRole>>>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type MedicalRecordAvgAggregateOutputType = {
  __typename?: 'MedicalRecordAvgAggregateOutputType';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type MedicalRecordCountAggregateOutputType = {
  __typename?: 'MedicalRecordCountAggregateOutputType';
  _all: Scalars['Int'];
  date: Scalars['Int'];
  dentistId: Scalars['Int'];
  id: Scalars['Int'];
  patientId: Scalars['Int'];
  totalPrice: Scalars['Int'];
};

export type MedicalRecordCountOutputType = {
  __typename?: 'MedicalRecordCountOutputType';
  diseases: Scalars['Int'];
  procedures: Scalars['Int'];
};

export type MedicalRecordListRelationFilter = {
  every?: Maybe<MedicalRecordWhereInput>;
  none?: Maybe<MedicalRecordWhereInput>;
  some?: Maybe<MedicalRecordWhereInput>;
};

export type MedicalRecordMaxAggregateOutputType = {
  __typename?: 'MedicalRecordMaxAggregateOutputType';
  date?: Maybe<Scalars['DateTime']>;
  dentistId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  patientId?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type MedicalRecordMinAggregateOutputType = {
  __typename?: 'MedicalRecordMinAggregateOutputType';
  date?: Maybe<Scalars['DateTime']>;
  dentistId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  patientId?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export enum MedicalRecordScalarFieldEnum {
  Date = 'date',
  DentistId = 'dentistId',
  Id = 'id',
  PatientId = 'patientId',
  TotalPrice = 'totalPrice'
}

export type MedicalRecordSumAggregateOutputType = {
  __typename?: 'MedicalRecordSumAggregateOutputType';
  totalPrice?: Maybe<Scalars['Float']>;
};

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneDentalDisease: DentalDisease;
  createOneDentalProcedure: DentalProcedure;
  createOneMedicalRecord: MedicalRecord;
  createOneUser: User;
  deleteManyDentalDisease: BatchPayload;
  deleteManyDentalProcedure: BatchPayload;
  deleteManyMedicalRecord: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneDentalDisease?: Maybe<DentalDisease>;
  deleteOneDentalProcedure?: Maybe<DentalProcedure>;
  deleteOneMedicalRecord?: Maybe<MedicalRecord>;
  deleteOneUser?: Maybe<User>;
  updateField: Field;
  updateManyDentalDisease: BatchPayload;
  updateManyDentalProcedure: BatchPayload;
  updateManyMedicalRecord: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneDentalDisease: DentalDisease;
  updateOneDentalProcedure: DentalProcedure;
  updateOneMedicalRecord: MedicalRecord;
  updateOneUser: User;
  upsertOneDentalDisease: DentalDisease;
  upsertOneDentalProcedure: DentalProcedure;
  upsertOneMedicalRecord: MedicalRecord;
  upsertOneUser: User;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedEnumuserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<Maybe<UserRole>>>;
  not?: Maybe<NestedEnumuserRoleFilter>;
  notIn?: Maybe<Array<Maybe<UserRole>>>;
};

export type NestedEnumuserRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumuserRoleFilter>;
  _min?: Maybe<NestedEnumuserRoleFilter>;
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<Maybe<UserRole>>>;
  not?: Maybe<NestedEnumuserRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<UserRole>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateDentalDisease?: Maybe<AggregateDentalDisease>;
  aggregateDentalProcedure?: Maybe<AggregateDentalProcedure>;
  aggregateMedicalRecord?: Maybe<AggregateMedicalRecord>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstDentalDisease?: Maybe<DentalDisease>;
  findFirstDentalProcedure?: Maybe<DentalProcedure>;
  findFirstMedicalRecord?: Maybe<MedicalRecord>;
  findFirstUser?: Maybe<User>;
  findManyDentalDisease: Array<DentalDisease>;
  findManyDentalDiseaseCount: Scalars['Int'];
  findManyDentalProcedure: Array<DentalProcedure>;
  findManyDentalProcedureCount: Scalars['Int'];
  findManyMedicalRecord: Array<MedicalRecord>;
  findManyMedicalRecordCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueDentalDisease?: Maybe<DentalDisease>;
  findUniqueDentalProcedure?: Maybe<DentalProcedure>;
  findUniqueMedicalRecord?: Maybe<MedicalRecord>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCountOutputType>;
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalDentistRecord: Array<MedicalRecord>;
  medicalPatientRecord: Array<MedicalRecord>;
  password: Scalars['String'];
  role: UserRole;
  tokenVersion?: Maybe<Scalars['Int']>;
};


export type UserMedicalDentistRecordArgs = {
  cursor?: Maybe<MedicalRecordWhereUniqueInput>;
  distinct?: Maybe<MedicalRecordScalarFieldEnum>;
  orderBy?: Maybe<MedicalRecordOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MedicalRecordWhereInput>;
};


export type UserMedicalPatientRecordArgs = {
  cursor?: Maybe<MedicalRecordWhereUniqueInput>;
  distinct?: Maybe<MedicalRecordScalarFieldEnum>;
  orderBy?: Maybe<MedicalRecordOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MedicalRecordWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  age?: Maybe<Scalars['Float']>;
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  age?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  login: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  tokenVersion: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  age?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  medicalDentistRecord: Scalars['Int'];
  medicalPatientRecord: Scalars['Int'];
};

export type UserCreateInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalDentistRecord?: Maybe<MedicalRecordCreateNestedManyWithoutDentistInput>;
  medicalPatientRecord?: Maybe<MedicalRecordCreateNestedManyWithoutPatientInput>;
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserCreateManyInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserCreateNestedOneWithoutMedicalDentistRecordInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMedicalDentistRecordInput>;
  create?: Maybe<UserUncheckedCreateWithoutMedicalDentistRecordInput>;
};

export type UserCreateNestedOneWithoutMedicalPatientRecordInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMedicalPatientRecordInput>;
  create?: Maybe<UserUncheckedCreateWithoutMedicalPatientRecordInput>;
};

export type UserCreateOrConnectWithoutMedicalDentistRecordInput = {
  create: UserUncheckedCreateWithoutMedicalDentistRecordInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMedicalPatientRecordInput = {
  create: UserUncheckedCreateWithoutMedicalPatientRecordInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutMedicalDentistRecordInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalPatientRecord?: Maybe<MedicalRecordCreateNestedManyWithoutPatientInput>;
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserCreateWithoutMedicalPatientRecordInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalDentistRecord?: Maybe<MedicalRecordCreateNestedManyWithoutDentistInput>;
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  age?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserMaxOrderByAggregateInput = {
  age?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  age?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserMinOrderByAggregateInput = {
  age?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  age?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  age?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  medicalDentistRecord?: Maybe<MedicalRecordOrderByRelationAggregateInput>;
  medicalPatientRecord?: Maybe<MedicalRecordOrderByRelationAggregateInput>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Age = 'age',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Login = 'login',
  Password = 'password',
  Role = 'role',
  TokenVersion = 'tokenVersion'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  age?: Maybe<IntWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  login?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  role?: Maybe<EnumuserRoleWithAggregatesFilter>;
  tokenVersion?: Maybe<IntNullableWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  age?: Maybe<Scalars['Int']>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  age?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalDentistRecord?: Maybe<MedicalRecordUncheckedCreateNestedManyWithoutDentistInput>;
  medicalPatientRecord?: Maybe<MedicalRecordUncheckedCreateNestedManyWithoutPatientInput>;
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutMedicalDentistRecordInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalPatientRecord?: Maybe<MedicalRecordUncheckedCreateNestedManyWithoutPatientInput>;
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutMedicalPatientRecordInput = {
  age: Scalars['Int'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  login: Scalars['String'];
  medicalDentistRecord?: Maybe<MedicalRecordUncheckedCreateNestedManyWithoutDentistInput>;
  password: Scalars['String'];
  role?: Maybe<UserRole>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserUncheckedUpdateInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  medicalDentistRecord?: Maybe<MedicalRecordUncheckedUpdateManyWithoutDentistInput>;
  medicalPatientRecord?: Maybe<MedicalRecordUncheckedUpdateManyWithoutPatientInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutMedicalDentistRecordInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  medicalPatientRecord?: Maybe<MedicalRecordUncheckedUpdateManyWithoutPatientInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutMedicalPatientRecordInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  medicalDentistRecord?: Maybe<MedicalRecordUncheckedUpdateManyWithoutDentistInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  medicalDentistRecord?: Maybe<MedicalRecordUpdateManyWithoutDentistInput>;
  medicalPatientRecord?: Maybe<MedicalRecordUpdateManyWithoutPatientInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutMedicalDentistRecordInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMedicalDentistRecordInput>;
  create?: Maybe<UserUncheckedCreateWithoutMedicalDentistRecordInput>;
  update?: Maybe<UserUncheckedUpdateWithoutMedicalDentistRecordInput>;
  upsert?: Maybe<UserUpsertWithoutMedicalDentistRecordInput>;
};

export type UserUpdateOneRequiredWithoutMedicalPatientRecordInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMedicalPatientRecordInput>;
  create?: Maybe<UserUncheckedCreateWithoutMedicalPatientRecordInput>;
  update?: Maybe<UserUncheckedUpdateWithoutMedicalPatientRecordInput>;
  upsert?: Maybe<UserUpsertWithoutMedicalPatientRecordInput>;
};

export type UserUpdateWithoutMedicalDentistRecordInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  medicalPatientRecord?: Maybe<MedicalRecordUpdateManyWithoutPatientInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMedicalPatientRecordInput = {
  age?: Maybe<IntFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  medicalDentistRecord?: Maybe<MedicalRecordUpdateManyWithoutDentistInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumuserRoleFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutMedicalDentistRecordInput = {
  create: UserUncheckedCreateWithoutMedicalDentistRecordInput;
  update: UserUncheckedUpdateWithoutMedicalDentistRecordInput;
};

export type UserUpsertWithoutMedicalPatientRecordInput = {
  create: UserUncheckedCreateWithoutMedicalPatientRecordInput;
  update: UserUncheckedUpdateWithoutMedicalPatientRecordInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  age?: Maybe<IntFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  login?: Maybe<StringFilter>;
  medicalDentistRecord?: Maybe<MedicalRecordListRelationFilter>;
  medicalPatientRecord?: Maybe<MedicalRecordListRelationFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumuserRoleFilter>;
  tokenVersion?: Maybe<IntNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
};

export type DentalDisease = {
  __typename?: 'dentalDisease';
  _count?: Maybe<DentalDiseaseCountOutputType>;
  id: Scalars['String'];
  medicalRecords: Array<MedicalRecord>;
  name: Scalars['String'];
};


export type DentalDiseaseMedicalRecordsArgs = {
  cursor?: Maybe<MedicalRecordWhereUniqueInput>;
  distinct?: Maybe<MedicalRecordScalarFieldEnum>;
  orderBy?: Maybe<MedicalRecordOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MedicalRecordWhereInput>;
};

export type DentalDiseaseCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type DentalDiseaseCreateInput = {
  id?: Maybe<Scalars['String']>;
  medicalRecords?: Maybe<MedicalRecordCreateNestedManyWithoutDiseasesInput>;
  name: Scalars['String'];
};

export type DentalDiseaseCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DentalDiseaseCreateNestedManyWithoutMedicalRecordsInput = {
  connect?: Maybe<Array<Maybe<DentalDiseaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<DentalDiseaseCreateOrConnectWithoutMedicalRecordsInput>>>;
  create?: Maybe<Array<Maybe<DentalDiseaseCreateWithoutMedicalRecordsInput>>>;
};

export type DentalDiseaseCreateOrConnectWithoutMedicalRecordsInput = {
  create: DentalDiseaseUncheckedCreateWithoutMedicalRecordsInput;
  where: DentalDiseaseWhereUniqueInput;
};

export type DentalDiseaseCreateWithoutMedicalRecordsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DentalDiseaseMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type DentalDiseaseMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type DentalDiseaseOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type DentalDiseaseOrderByWithAggregationInput = {
  _count?: Maybe<DentalDiseaseCountOrderByAggregateInput>;
  _max?: Maybe<DentalDiseaseMaxOrderByAggregateInput>;
  _min?: Maybe<DentalDiseaseMinOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type DentalDiseaseOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  medicalRecords?: Maybe<MedicalRecordOrderByRelationAggregateInput>;
  name?: Maybe<SortOrder>;
};

export type DentalDiseaseScalarWhereInput = {
  AND?: Maybe<Array<Maybe<DentalDiseaseScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<DentalDiseaseScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<DentalDiseaseScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type DentalDiseaseScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<DentalDiseaseScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<DentalDiseaseScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<DentalDiseaseScalarWhereWithAggregatesInput>>>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type DentalDiseaseUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DentalDiseaseUncheckedCreateWithoutMedicalRecordsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DentalDiseaseUncheckedUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUncheckedUpdateManyInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUncheckedUpdateManyWithoutDiseasesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUncheckedUpdateWithoutMedicalRecordsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  medicalRecords?: Maybe<MedicalRecordUpdateManyWithoutDiseasesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUpdateManyWithWhereWithoutMedicalRecordsInput = {
  data: DentalDiseaseUncheckedUpdateManyWithoutDiseasesInput;
  where: DentalDiseaseScalarWhereInput;
};

export type DentalDiseaseUpdateManyWithoutMedicalRecordsInput = {
  connect?: Maybe<Array<Maybe<DentalDiseaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<DentalDiseaseCreateOrConnectWithoutMedicalRecordsInput>>>;
  create?: Maybe<Array<Maybe<DentalDiseaseCreateWithoutMedicalRecordsInput>>>;
  delete?: Maybe<Array<Maybe<DentalDiseaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<DentalDiseaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<DentalDiseaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<DentalDiseaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<DentalDiseaseUpdateWithWhereUniqueWithoutMedicalRecordsInput>>>;
  updateMany?: Maybe<Array<Maybe<DentalDiseaseUpdateManyWithWhereWithoutMedicalRecordsInput>>>;
  upsert?: Maybe<Array<Maybe<DentalDiseaseUpsertWithWhereUniqueWithoutMedicalRecordsInput>>>;
};

export type DentalDiseaseUpdateWithWhereUniqueWithoutMedicalRecordsInput = {
  data: DentalDiseaseUncheckedUpdateWithoutMedicalRecordsInput;
  where: DentalDiseaseWhereUniqueInput;
};

export type DentalDiseaseUpdateWithoutMedicalRecordsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DentalDiseaseUpsertWithWhereUniqueWithoutMedicalRecordsInput = {
  create: DentalDiseaseUncheckedCreateWithoutMedicalRecordsInput;
  update: DentalDiseaseUncheckedUpdateWithoutMedicalRecordsInput;
  where: DentalDiseaseWhereUniqueInput;
};

export type DentalDiseaseWhereInput = {
  AND?: Maybe<Array<Maybe<DentalDiseaseWhereInput>>>;
  NOT?: Maybe<Array<Maybe<DentalDiseaseWhereInput>>>;
  OR?: Maybe<Array<Maybe<DentalDiseaseWhereInput>>>;
  id?: Maybe<StringFilter>;
  medicalRecords?: Maybe<MedicalRecordListRelationFilter>;
  name?: Maybe<StringFilter>;
};

export type DentalDiseaseWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DentalProcedure = {
  __typename?: 'dentalProcedure';
  _count?: Maybe<DentalProcedureCountOutputType>;
  id: Scalars['String'];
  medicalRecords: Array<MedicalRecord>;
  name: Scalars['String'];
  price: Scalars['Float'];
};


export type DentalProcedureMedicalRecordsArgs = {
  cursor?: Maybe<MedicalRecordWhereUniqueInput>;
  distinct?: Maybe<MedicalRecordScalarFieldEnum>;
  orderBy?: Maybe<MedicalRecordOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MedicalRecordWhereInput>;
};

export type DentalProcedureAvgOrderByAggregateInput = {
  price?: Maybe<SortOrder>;
};

export type DentalProcedureCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type DentalProcedureCreateInput = {
  id?: Maybe<Scalars['String']>;
  medicalRecords?: Maybe<MedicalRecordCreateNestedManyWithoutProceduresInput>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DentalProcedureCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DentalProcedureCreateNestedManyWithoutMedicalRecordsInput = {
  connect?: Maybe<Array<Maybe<DentalProcedureWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<DentalProcedureCreateOrConnectWithoutMedicalRecordsInput>>>;
  create?: Maybe<Array<Maybe<DentalProcedureCreateWithoutMedicalRecordsInput>>>;
};

export type DentalProcedureCreateOrConnectWithoutMedicalRecordsInput = {
  create: DentalProcedureUncheckedCreateWithoutMedicalRecordsInput;
  where: DentalProcedureWhereUniqueInput;
};

export type DentalProcedureCreateWithoutMedicalRecordsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DentalProcedureMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type DentalProcedureMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type DentalProcedureOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type DentalProcedureOrderByWithAggregationInput = {
  _avg?: Maybe<DentalProcedureAvgOrderByAggregateInput>;
  _count?: Maybe<DentalProcedureCountOrderByAggregateInput>;
  _max?: Maybe<DentalProcedureMaxOrderByAggregateInput>;
  _min?: Maybe<DentalProcedureMinOrderByAggregateInput>;
  _sum?: Maybe<DentalProcedureSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type DentalProcedureOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  medicalRecords?: Maybe<MedicalRecordOrderByRelationAggregateInput>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type DentalProcedureScalarWhereInput = {
  AND?: Maybe<Array<Maybe<DentalProcedureScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<DentalProcedureScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<DentalProcedureScalarWhereInput>>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
};

export type DentalProcedureScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<DentalProcedureScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<DentalProcedureScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<DentalProcedureScalarWhereWithAggregatesInput>>>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  price?: Maybe<FloatWithAggregatesFilter>;
};

export type DentalProcedureSumOrderByAggregateInput = {
  price?: Maybe<SortOrder>;
};

export type DentalProcedureUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DentalProcedureUncheckedCreateWithoutMedicalRecordsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type DentalProcedureUncheckedUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUncheckedUpdateManyInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUncheckedUpdateManyWithoutProceduresInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUncheckedUpdateWithoutMedicalRecordsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  medicalRecords?: Maybe<MedicalRecordUpdateManyWithoutProceduresInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUpdateManyWithWhereWithoutMedicalRecordsInput = {
  data: DentalProcedureUncheckedUpdateManyWithoutProceduresInput;
  where: DentalProcedureScalarWhereInput;
};

export type DentalProcedureUpdateManyWithoutMedicalRecordsInput = {
  connect?: Maybe<Array<Maybe<DentalProcedureWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<DentalProcedureCreateOrConnectWithoutMedicalRecordsInput>>>;
  create?: Maybe<Array<Maybe<DentalProcedureCreateWithoutMedicalRecordsInput>>>;
  delete?: Maybe<Array<Maybe<DentalProcedureWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<DentalProcedureScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<DentalProcedureWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<DentalProcedureWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<DentalProcedureUpdateWithWhereUniqueWithoutMedicalRecordsInput>>>;
  updateMany?: Maybe<Array<Maybe<DentalProcedureUpdateManyWithWhereWithoutMedicalRecordsInput>>>;
  upsert?: Maybe<Array<Maybe<DentalProcedureUpsertWithWhereUniqueWithoutMedicalRecordsInput>>>;
};

export type DentalProcedureUpdateWithWhereUniqueWithoutMedicalRecordsInput = {
  data: DentalProcedureUncheckedUpdateWithoutMedicalRecordsInput;
  where: DentalProcedureWhereUniqueInput;
};

export type DentalProcedureUpdateWithoutMedicalRecordsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DentalProcedureUpsertWithWhereUniqueWithoutMedicalRecordsInput = {
  create: DentalProcedureUncheckedCreateWithoutMedicalRecordsInput;
  update: DentalProcedureUncheckedUpdateWithoutMedicalRecordsInput;
  where: DentalProcedureWhereUniqueInput;
};

export type DentalProcedureWhereInput = {
  AND?: Maybe<Array<Maybe<DentalProcedureWhereInput>>>;
  NOT?: Maybe<Array<Maybe<DentalProcedureWhereInput>>>;
  OR?: Maybe<Array<Maybe<DentalProcedureWhereInput>>>;
  id?: Maybe<StringFilter>;
  medicalRecords?: Maybe<MedicalRecordListRelationFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
};

export type DentalProcedureWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MedicalRecord = {
  __typename?: 'medicalRecord';
  _count?: Maybe<MedicalRecordCountOutputType>;
  date: Scalars['DateTime'];
  dentist: User;
  dentistId: Scalars['String'];
  diseases: Array<DentalDisease>;
  id: Scalars['String'];
  patient: User;
  patientId: Scalars['String'];
  procedures: Array<DentalProcedure>;
  totalPrice: Scalars['Float'];
};


export type MedicalRecordDiseasesArgs = {
  cursor?: Maybe<DentalDiseaseWhereUniqueInput>;
  distinct?: Maybe<DentalDiseaseScalarFieldEnum>;
  orderBy?: Maybe<DentalDiseaseOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DentalDiseaseWhereInput>;
};


export type MedicalRecordProceduresArgs = {
  cursor?: Maybe<DentalProcedureWhereUniqueInput>;
  distinct?: Maybe<DentalProcedureScalarFieldEnum>;
  orderBy?: Maybe<DentalProcedureOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DentalProcedureWhereInput>;
};

export type MedicalRecordAvgOrderByAggregateInput = {
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordCountOrderByAggregateInput = {
  date?: Maybe<SortOrder>;
  dentistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  patientId?: Maybe<SortOrder>;
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordCreateInput = {
  date: Scalars['DateTime'];
  dentist: UserCreateNestedOneWithoutMedicalDentistRecordInput;
  diseases?: Maybe<DentalDiseaseCreateNestedManyWithoutMedicalRecordsInput>;
  id?: Maybe<Scalars['String']>;
  patient: UserCreateNestedOneWithoutMedicalPatientRecordInput;
  procedures?: Maybe<DentalProcedureCreateNestedManyWithoutMedicalRecordsInput>;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateManyDentistInput = {
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  patientId: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateManyDentistInputEnvelope = {
  data: MedicalRecordCreateManyDentistInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MedicalRecordCreateManyInput = {
  date: Scalars['DateTime'];
  dentistId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  patientId: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateManyPatientInput = {
  date: Scalars['DateTime'];
  dentistId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateManyPatientInputEnvelope = {
  data: MedicalRecordCreateManyPatientInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MedicalRecordCreateNestedManyWithoutDentistInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutDentistInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutDentistInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyDentistInputEnvelope>;
};

export type MedicalRecordCreateNestedManyWithoutDiseasesInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutDiseasesInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutDiseasesInput>>>;
};

export type MedicalRecordCreateNestedManyWithoutPatientInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutPatientInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutPatientInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyPatientInputEnvelope>;
};

export type MedicalRecordCreateNestedManyWithoutProceduresInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutProceduresInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutProceduresInput>>>;
};

export type MedicalRecordCreateOrConnectWithoutDentistInput = {
  create: MedicalRecordUncheckedCreateWithoutDentistInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordCreateOrConnectWithoutDiseasesInput = {
  create: MedicalRecordUncheckedCreateWithoutDiseasesInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordCreateOrConnectWithoutPatientInput = {
  create: MedicalRecordUncheckedCreateWithoutPatientInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordCreateOrConnectWithoutProceduresInput = {
  create: MedicalRecordUncheckedCreateWithoutProceduresInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordCreateWithoutDentistInput = {
  date: Scalars['DateTime'];
  diseases?: Maybe<DentalDiseaseCreateNestedManyWithoutMedicalRecordsInput>;
  id?: Maybe<Scalars['String']>;
  patient: UserCreateNestedOneWithoutMedicalPatientRecordInput;
  procedures?: Maybe<DentalProcedureCreateNestedManyWithoutMedicalRecordsInput>;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateWithoutDiseasesInput = {
  date: Scalars['DateTime'];
  dentist: UserCreateNestedOneWithoutMedicalDentistRecordInput;
  id?: Maybe<Scalars['String']>;
  patient: UserCreateNestedOneWithoutMedicalPatientRecordInput;
  procedures?: Maybe<DentalProcedureCreateNestedManyWithoutMedicalRecordsInput>;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateWithoutPatientInput = {
  date: Scalars['DateTime'];
  dentist: UserCreateNestedOneWithoutMedicalDentistRecordInput;
  diseases?: Maybe<DentalDiseaseCreateNestedManyWithoutMedicalRecordsInput>;
  id?: Maybe<Scalars['String']>;
  procedures?: Maybe<DentalProcedureCreateNestedManyWithoutMedicalRecordsInput>;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordCreateWithoutProceduresInput = {
  date: Scalars['DateTime'];
  dentist: UserCreateNestedOneWithoutMedicalDentistRecordInput;
  diseases?: Maybe<DentalDiseaseCreateNestedManyWithoutMedicalRecordsInput>;
  id?: Maybe<Scalars['String']>;
  patient: UserCreateNestedOneWithoutMedicalPatientRecordInput;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordMaxOrderByAggregateInput = {
  date?: Maybe<SortOrder>;
  dentistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  patientId?: Maybe<SortOrder>;
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordMinOrderByAggregateInput = {
  date?: Maybe<SortOrder>;
  dentistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  patientId?: Maybe<SortOrder>;
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type MedicalRecordOrderByWithAggregationInput = {
  _avg?: Maybe<MedicalRecordAvgOrderByAggregateInput>;
  _count?: Maybe<MedicalRecordCountOrderByAggregateInput>;
  _max?: Maybe<MedicalRecordMaxOrderByAggregateInput>;
  _min?: Maybe<MedicalRecordMinOrderByAggregateInput>;
  _sum?: Maybe<MedicalRecordSumOrderByAggregateInput>;
  date?: Maybe<SortOrder>;
  dentistId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  patientId?: Maybe<SortOrder>;
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordOrderByWithRelationInput = {
  date?: Maybe<SortOrder>;
  dentist?: Maybe<UserOrderByWithRelationInput>;
  dentistId?: Maybe<SortOrder>;
  diseases?: Maybe<DentalDiseaseOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  patient?: Maybe<UserOrderByWithRelationInput>;
  patientId?: Maybe<SortOrder>;
  procedures?: Maybe<DentalProcedureOrderByRelationAggregateInput>;
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordScalarWhereInput = {
  AND?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  date?: Maybe<DateTimeFilter>;
  dentistId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  patientId?: Maybe<StringFilter>;
  totalPrice?: Maybe<FloatFilter>;
};

export type MedicalRecordScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<MedicalRecordScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<MedicalRecordScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<MedicalRecordScalarWhereWithAggregatesInput>>>;
  date?: Maybe<DateTimeWithAggregatesFilter>;
  dentistId?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  patientId?: Maybe<StringWithAggregatesFilter>;
  totalPrice?: Maybe<FloatWithAggregatesFilter>;
};

export type MedicalRecordSumOrderByAggregateInput = {
  totalPrice?: Maybe<SortOrder>;
};

export type MedicalRecordUncheckedCreateInput = {
  date: Scalars['DateTime'];
  dentistId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  patientId: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type MedicalRecordUncheckedCreateNestedManyWithoutDentistInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutDentistInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutDentistInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyDentistInputEnvelope>;
};

export type MedicalRecordUncheckedCreateNestedManyWithoutPatientInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutPatientInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutPatientInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyPatientInputEnvelope>;
};

export type MedicalRecordUncheckedCreateWithoutDentistInput = {
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  patientId: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type MedicalRecordUncheckedCreateWithoutDiseasesInput = {
  date: Scalars['DateTime'];
  dentistId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  patientId: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type MedicalRecordUncheckedCreateWithoutPatientInput = {
  date: Scalars['DateTime'];
  dentistId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
};

export type MedicalRecordUncheckedCreateWithoutProceduresInput = {
  date: Scalars['DateTime'];
  dentistId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  patientId: Scalars['String'];
  totalPrice: Scalars['Float'];
};

export type MedicalRecordUncheckedUpdateInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateManyInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateManyWithoutDentistInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutDentistInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutDentistInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyDentistInputEnvelope>;
  delete?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MedicalRecordUpdateWithWhereUniqueWithoutDentistInput>>>;
  updateMany?: Maybe<Array<Maybe<MedicalRecordUpdateManyWithWhereWithoutDentistInput>>>;
  upsert?: Maybe<Array<Maybe<MedicalRecordUpsertWithWhereUniqueWithoutDentistInput>>>;
};

export type MedicalRecordUncheckedUpdateManyWithoutMedicalDentistRecordInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateManyWithoutMedicalPatientRecordInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateManyWithoutMedicalRecordsInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateManyWithoutPatientInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutPatientInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutPatientInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyPatientInputEnvelope>;
  delete?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MedicalRecordUpdateWithWhereUniqueWithoutPatientInput>>>;
  updateMany?: Maybe<Array<Maybe<MedicalRecordUpdateManyWithWhereWithoutPatientInput>>>;
  upsert?: Maybe<Array<Maybe<MedicalRecordUpsertWithWhereUniqueWithoutPatientInput>>>;
};

export type MedicalRecordUncheckedUpdateWithoutDentistInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateWithoutDiseasesInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateWithoutPatientInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUncheckedUpdateWithoutProceduresInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentistId?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patientId?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpdateInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentist?: Maybe<UserUpdateOneRequiredWithoutMedicalDentistRecordInput>;
  diseases?: Maybe<DentalDiseaseUpdateManyWithoutMedicalRecordsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patient?: Maybe<UserUpdateOneRequiredWithoutMedicalPatientRecordInput>;
  procedures?: Maybe<DentalProcedureUpdateManyWithoutMedicalRecordsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpdateManyMutationInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpdateManyWithWhereWithoutDentistInput = {
  data: MedicalRecordUncheckedUpdateManyWithoutMedicalDentistRecordInput;
  where: MedicalRecordScalarWhereInput;
};

export type MedicalRecordUpdateManyWithWhereWithoutDiseasesInput = {
  data: MedicalRecordUncheckedUpdateManyWithoutMedicalRecordsInput;
  where: MedicalRecordScalarWhereInput;
};

export type MedicalRecordUpdateManyWithWhereWithoutPatientInput = {
  data: MedicalRecordUncheckedUpdateManyWithoutMedicalPatientRecordInput;
  where: MedicalRecordScalarWhereInput;
};

export type MedicalRecordUpdateManyWithWhereWithoutProceduresInput = {
  data: MedicalRecordUncheckedUpdateManyWithoutMedicalRecordsInput;
  where: MedicalRecordScalarWhereInput;
};

export type MedicalRecordUpdateManyWithoutDentistInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutDentistInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutDentistInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyDentistInputEnvelope>;
  delete?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MedicalRecordUpdateWithWhereUniqueWithoutDentistInput>>>;
  updateMany?: Maybe<Array<Maybe<MedicalRecordUpdateManyWithWhereWithoutDentistInput>>>;
  upsert?: Maybe<Array<Maybe<MedicalRecordUpsertWithWhereUniqueWithoutDentistInput>>>;
};

export type MedicalRecordUpdateManyWithoutDiseasesInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutDiseasesInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutDiseasesInput>>>;
  delete?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MedicalRecordUpdateWithWhereUniqueWithoutDiseasesInput>>>;
  updateMany?: Maybe<Array<Maybe<MedicalRecordUpdateManyWithWhereWithoutDiseasesInput>>>;
  upsert?: Maybe<Array<Maybe<MedicalRecordUpsertWithWhereUniqueWithoutDiseasesInput>>>;
};

export type MedicalRecordUpdateManyWithoutPatientInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutPatientInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutPatientInput>>>;
  createMany?: Maybe<MedicalRecordCreateManyPatientInputEnvelope>;
  delete?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MedicalRecordUpdateWithWhereUniqueWithoutPatientInput>>>;
  updateMany?: Maybe<Array<Maybe<MedicalRecordUpdateManyWithWhereWithoutPatientInput>>>;
  upsert?: Maybe<Array<Maybe<MedicalRecordUpsertWithWhereUniqueWithoutPatientInput>>>;
};

export type MedicalRecordUpdateManyWithoutProceduresInput = {
  connect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MedicalRecordCreateOrConnectWithoutProceduresInput>>>;
  create?: Maybe<Array<Maybe<MedicalRecordCreateWithoutProceduresInput>>>;
  delete?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MedicalRecordScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MedicalRecordWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MedicalRecordUpdateWithWhereUniqueWithoutProceduresInput>>>;
  updateMany?: Maybe<Array<Maybe<MedicalRecordUpdateManyWithWhereWithoutProceduresInput>>>;
  upsert?: Maybe<Array<Maybe<MedicalRecordUpsertWithWhereUniqueWithoutProceduresInput>>>;
};

export type MedicalRecordUpdateWithWhereUniqueWithoutDentistInput = {
  data: MedicalRecordUncheckedUpdateWithoutDentistInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpdateWithWhereUniqueWithoutDiseasesInput = {
  data: MedicalRecordUncheckedUpdateWithoutDiseasesInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpdateWithWhereUniqueWithoutPatientInput = {
  data: MedicalRecordUncheckedUpdateWithoutPatientInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpdateWithWhereUniqueWithoutProceduresInput = {
  data: MedicalRecordUncheckedUpdateWithoutProceduresInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpdateWithoutDentistInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  diseases?: Maybe<DentalDiseaseUpdateManyWithoutMedicalRecordsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patient?: Maybe<UserUpdateOneRequiredWithoutMedicalPatientRecordInput>;
  procedures?: Maybe<DentalProcedureUpdateManyWithoutMedicalRecordsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpdateWithoutDiseasesInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentist?: Maybe<UserUpdateOneRequiredWithoutMedicalDentistRecordInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patient?: Maybe<UserUpdateOneRequiredWithoutMedicalPatientRecordInput>;
  procedures?: Maybe<DentalProcedureUpdateManyWithoutMedicalRecordsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpdateWithoutPatientInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentist?: Maybe<UserUpdateOneRequiredWithoutMedicalDentistRecordInput>;
  diseases?: Maybe<DentalDiseaseUpdateManyWithoutMedicalRecordsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  procedures?: Maybe<DentalProcedureUpdateManyWithoutMedicalRecordsInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpdateWithoutProceduresInput = {
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dentist?: Maybe<UserUpdateOneRequiredWithoutMedicalDentistRecordInput>;
  diseases?: Maybe<DentalDiseaseUpdateManyWithoutMedicalRecordsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  patient?: Maybe<UserUpdateOneRequiredWithoutMedicalPatientRecordInput>;
  totalPrice?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type MedicalRecordUpsertWithWhereUniqueWithoutDentistInput = {
  create: MedicalRecordUncheckedCreateWithoutDentistInput;
  update: MedicalRecordUncheckedUpdateWithoutDentistInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpsertWithWhereUniqueWithoutDiseasesInput = {
  create: MedicalRecordUncheckedCreateWithoutDiseasesInput;
  update: MedicalRecordUncheckedUpdateWithoutDiseasesInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpsertWithWhereUniqueWithoutPatientInput = {
  create: MedicalRecordUncheckedCreateWithoutPatientInput;
  update: MedicalRecordUncheckedUpdateWithoutPatientInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordUpsertWithWhereUniqueWithoutProceduresInput = {
  create: MedicalRecordUncheckedCreateWithoutProceduresInput;
  update: MedicalRecordUncheckedUpdateWithoutProceduresInput;
  where: MedicalRecordWhereUniqueInput;
};

export type MedicalRecordWhereInput = {
  AND?: Maybe<Array<Maybe<MedicalRecordWhereInput>>>;
  NOT?: Maybe<Array<Maybe<MedicalRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<MedicalRecordWhereInput>>>;
  date?: Maybe<DateTimeFilter>;
  dentist?: Maybe<UserWhereInput>;
  dentistId?: Maybe<StringFilter>;
  diseases?: Maybe<DentalDiseaseListRelationFilter>;
  id?: Maybe<StringFilter>;
  patient?: Maybe<UserWhereInput>;
  patientId?: Maybe<StringFilter>;
  procedures?: Maybe<DentalProcedureListRelationFilter>;
  totalPrice?: Maybe<FloatFilter>;
};

export type MedicalRecordWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Client = 'client',
  Dentist = 'dentist'
}
