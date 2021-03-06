/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow */

import type { Realm } from "../../realm.js";
import { ObjectValue, StringValue } from "../../values/index.js";

export default function(realm: Realm, obj: ObjectValue): void {
  obj.defineNativeProperty("name", new StringValue(realm, "URIError"));
  obj.defineNativeProperty("message", realm.intrinsics.emptyString);
}
