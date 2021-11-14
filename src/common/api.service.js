import ApiSeviceFake from '../common/bridges/fake'

import { ENV } from "@/common/config";

const service = ENV && ENV === "development"  ? ApiSeviceFake : null

export default service;